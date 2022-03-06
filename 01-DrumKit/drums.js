function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) // selects the audio with the correct data-key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // selects the div with a class of key and data-key
    if(!audio) return; // if audio doesn't exist exit the function (skips unused keys)
    audio.currentTime = 0; //rewind to start so multiple key strikes make sound
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return //skip it if its not a 'transform' tag
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);