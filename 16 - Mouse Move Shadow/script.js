var mouseMoveShadow = (function mouseMoveShadowModule() {
  var hero = document.querySelector('.hero h1')
  var viewPort = {}

  var shadowOffset = {
    xMax: 200,
    yMax: 100,
  }

  var publicApi = {
    init,
  }

  return publicApi

  // ******************************************************

  function init() {
    document.body.addEventListener('mousemove', handleMouseMove)
    getViewPortSize()
  }

  function getViewPortSize() {
    viewPort.w = window.innerWidth
    viewPort.h = window.innerHeight
  }

  function handleMouseMove(event) {
    const { clientX: x, clientY: y } = event
    const { xR, yR } = calculateMouseOffsetFromViewPortCenter(x, y)
    const { xMax, yMax } = shadowOffset

    changeHeroShadow(
      Math.round(xR * xMax),
      Math.round(yR * yMax),
      1 - Math.max(Math.abs(xR), Math.abs(yR)),
    )
  }

  function calculateMouseOffsetFromViewPortCenter(x, y) {
    return {
      xR: x / (viewPort.w / 2) - 1,
      yR: y / (viewPort.h / 2) - 1,
    }
  }

  function changeHeroShadow(x, y, pow = 1) {
    hero.style.textShadow = `${x}px ${y}px 0 rgba(${255 * pow},${100 *
      pow},${200 * pow},${pow})`
  }
})()

mouseMoveShadow.init()
