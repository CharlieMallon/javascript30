// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build function
function togglePlay(){
    // videos only have a paused property so we will use this to play/pause the video
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(){
    //tied to what the video is doing so it wll update no matter what played/pause the video
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    // uses Data attribute of skip to see how far the video needs to move and in which direction
    console.log(this.dataset)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    //this updates the value of the volume & speed sliders
    //the name of the input is the name of the property to be changed
    video[this.name] = this.value;

}

// event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//there are multiple skip buttons so this needs to be a foreach.
skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))