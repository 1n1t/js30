var holdShift = (function holdShiftModule() {
  var isShift
  var checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'))
  var prevIndex

  var publicApi = {
    init,
  }

  return publicApi

  function init() {
    document.body.addEventListener('keydown', listenToShiftPress)
    document.body.addEventListener('keyup', listenToShiftPress)
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('click', litsteToCheckboxClick)
    })
  }

  function listenToShiftPress(event) {
    if (window.event) {
      isShift = !!window.event.shiftKey
    } else {
      isShift = !!event.shiftKey
    }
  }

  function litsteToCheckboxClick(event) {
    if (isShift) {
      let currentIndex = checkboxes.indexOf(event.target)
      if (prevIndex) {
        if (currentIndex > prevIndex) toggleBetween(prevIndex, currentIndex)
        if (currentIndex < prevIndex) toggleBetween(currentIndex, prevIndex)
      }
    }

    prevIndex = checkboxes.indexOf(event.target)
  }

  function toggleBetween(min, max) {
    for (let i = min + 1; i < max; i++) {
      checkboxes[i].checked = !checkboxes[i].checked
    }
  }
})()

holdShift.init()
