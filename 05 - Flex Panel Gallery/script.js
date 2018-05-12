const panelGallery = (function panelGalleryModule() {
  const panels = document.querySelectorAll('.panel')

  const publicApi = {
    init,
  }

  return publicApi

  function init() {
    panels.forEach(registerEventListeners)
  }

  function registerEventListeners(el) {
    el.addEventListener('click', handlePanelClick)
    el.addEventListener('transitionend', handleTransitionEnd)
  }

  function handlePanelClick(event) {
    panels.forEach(el => el.classList.remove('open'))
    event.currentTarget.classList.add('open')
  }

  function handleTransitionEnd(event) {
    if (event.propertyName === 'flex-grow') {
      const children = event.currentTarget.querySelectorAll('p')
      children.forEach(el => el.classList.toggle('open'))
    }
  }
})()

panelGallery.init()
