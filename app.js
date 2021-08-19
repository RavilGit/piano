let keys = document.querySelectorAll('kbd');
const sounds = {
  'KeyA': 'A.mp3',
  'KeyS': 'S.mp3',
  'KeyD': 'D.mp3',
  'KeyF': 'F.mp3',
  'KeyG': 'G.mp3',
  'KeyH': 'H.mp3',
  'KeyJ': 'J.mp3',

  'KeyW': 'black/W.mp3',
  'KeyE': 'black/E.mp3',
  'KeyT': 'black/T.mp3',
  'KeyY': 'black/Y.mp3',
  'KeyU': 'black/U.mp3'
};

document.addEventListener("keypress", function (event){
  for (let i = 0; i < keys.length; i++){
    if (event.key == keys[i].innerHTML.toLowerCase()){
      keys[i].classList.add('pressed');
    }
  }
  if (event.code in sounds) {
    let audio = new Audio(`audio/${sounds[event.code]}`);
    audio.play();
  }
});

document.addEventListener('keyup', function (event){
  for (let i = 0; i < keys.length; i++){
    if (event.key == keys[i].innerHTML.toLowerCase()){
      keys[i].classList.remove('pressed');
    }
  }
})