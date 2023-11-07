var video;

window.addEventListener("load", function() {

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {

	video.play();
	// update volume info
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {

	video.pause();
})

// slow down button
document.querySelector("#slower").addEventListener("click", function() {

	video.playbackRate *= 0.90;

	// log new speed to console
	console.log(video.playbackRate);
})

// speed up button
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;

	// log new speed to console
	console.log(video.playbackRate);
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;

	// if length of video has been exceeded go back to beginning
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}

	// log current location of the video
	console.log(video.currentTime);
})

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;

		// update the text in the button
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;

		// update the text in the button
		document.querySelector("#mute").innerHTML = "Unmute"
	}
})

// volume slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;

	// update the volume information
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

// styled button
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

// original button
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})
