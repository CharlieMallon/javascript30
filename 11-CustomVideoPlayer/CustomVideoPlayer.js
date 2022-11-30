// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// build function
function togglePlay(){
    // videos only have a paused property so we will use this to play/pause the video
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

// event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);