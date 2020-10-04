function playAudio(event) {
  event.preventDefault();

  const button = event.currentTarget;

  button.classList.add('playing');
  new Audio(button.children.audio.src).play();
  setTimeout(function() {
    button.classList.remove('playing');
  }, 100);
}

window.addEventListener('keydown', event => {
  event.preventDefault();

  const keys = {
    a: 'clap',
    s: 'hhat',
    d: 'kick',
    f: 'openhat',
    g: 'boom',
    h: 'ride',
    j: 'snare',
    k: 'tom',
    l: 'tink'
  };

  if(!(event.key in keys)) {
    return;
  }

  const playButton = document.getElementById(keys[event.key]);
  playButton.dispatchEvent(new Event("click"))
  // new Audio(playButtonAudioSrc).play();
});