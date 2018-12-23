// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();
// get the audio element
const audioElement = document.querySelector('#bass_C0');

// pass it into the audio context
const track = audioCtx.createMediaElementSource(audioElement);

track.connect(audioCtx.destination);
audioElement.play();
