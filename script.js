const wildernessSound = new Audio(
  "assets/580863__dragofer__wilderness-soundscape.ogg"
);
// https://freesound.org/people/Dragofer/sounds/580863/
const scarySound = new Audio(
  "assets/47349__dobroide__20080125-dream-of-a-hyena.wav"
);
// https://freesound.org/people/dobroide/sounds/47349/

wildernessSound.volume = 0.1;
scarySound.volume = 0.1;

wildernessSound.play();
scarySound.play();
