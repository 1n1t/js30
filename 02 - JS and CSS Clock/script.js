const cssClock = (function drumKitModule() {
  const publicApi = {
    run
  };

  return publicApi;

  function run() {
    initilize();
    setInterval(rotateHands, 1000);
  }

  function initilize() {
    rotateHands();
  }

  function rotateHands() {
    const { hourHand, minuteHand, secondHand } = getHandNodes();
    const { hourAngle, minAngle, secAngle } = getHandAngles();

    secondHand.style.transform = `rotate(${secAngle}deg)`;
    minuteHand.style.transform = `rotate(${minAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
  }

  function getHandNodes() {
    return {
      hourHand: document.querySelector('.hour-hand'),
      minuteHand: document.querySelector('.min-hand'),
      secondHand: document.querySelector('.second-hand')
    };
  }

  function getHandAngles() {
    const START_ANGLE = 90;
    const { hours, minutes, seconds } = getTime();

    return {
      hourAngle:
        START_ANGLE + 360 / 12 * (hours + seconds / 60 / 60 + minutes / 60),
      minAngle: START_ANGLE + 360 / 60 * (minutes + seconds / 60),
      secAngle: START_ANGLE + 360 / 60 * seconds
    };
  }

  function getTime() {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds()
    };
  }
})();

cssClock.run();
