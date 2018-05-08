const drumKit = (function drumKitModule() {
  const AVAILABLE_KEYS = [65, 83, 68, 70, 71, 72, 74, 75, 76];

  const publicApi = {
    play
  };

  return publicApi;

  function play() {
    registerListeners();
  }

  function registerListeners() {
    document.body.addEventListener('keydown', onKeyDownHandler);
    document
      .querySelectorAll('.key')
      .forEach(key =>
        key.addEventListener('transitionend', onKeyTransitionEndHandler)
      );
  }

  function onKeyDownHandler(event) {
    var code = event.which || event.keyCode;
    if (AVAILABLE_KEYS.includes(code)) {
      playSound(code);
      animateKey(code);
    }
  }

  function onKeyTransitionEndHandler(event) {
    if (event.propertyName != 'transform') return;
    event.target.classList.remove('playing');
  }

  function playSound(code) {
    var sound = document.querySelector(`audio[data-key="${code}"]`);
    sound.currentTime = 0;
    sound.play();
  }

  function animateKey(code) {
    var key = document.querySelector(`.key[data-key="${code}"]`);
    key.classList.add('playing');
  }
})();

drumKit.play();
