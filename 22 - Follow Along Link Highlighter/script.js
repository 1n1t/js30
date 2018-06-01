var links = document.querySelectorAll('a')
var pill = document.querySelector('.highlight')
var wrapper = document.querySelector('.wrapper')
var wrapperOffset = {
  top: wrapper.offsetTop,
  left: wrapper.offsetLeft,
}

links.forEach(link => {
  link.addEventListener('mouseenter', handleMouseEnter)
})

function handleMouseEnter({ target }) {
  var { top, left, width, height } = target.getBoundingClientRect()

  top = top + window.scrollY
  left = left + window.scrollX

  pill.style.top = `${top}px`
  pill.style.left = `${left}px`
  pill.style.width = `${width}px`
  pill.style.height = `${height}px`
}
