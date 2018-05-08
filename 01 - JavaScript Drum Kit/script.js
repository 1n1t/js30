const drumKit = (function drumKitModule() {
  const AVAILABLE_KEYS = [65, 83, 68, 70, 71, 72, 74, 75, 76];

  const publicApi = {
    play
  };

  return publicApi;

  function play() {
    registerListener();
  }

  function registerListener() {
    document.body.addEventListener('keydown', onKeyDownHandler);
  }

  function onKeyDownHandler(event) {
    var code = event.which || event.keyCode;
    if (AVAILABLE_KEYS.includes(code)) {
      playSound(code);
      animateKey(code);
    }
  }

  function playSound(code) {
    var sound = document.querySelector(`audio[data-key="${code}"]`);
    sound.play();
  }

  function animateKey(code) {
    var key = document.querySelector(`.key[data-key="${code}"]`);
    key.classList.add('playing');
    setTimeout(() => {
      key.classList.remove('playing');
    }, 100);
  }
})();

drumKit.play();
