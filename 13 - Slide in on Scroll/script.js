var slideOnScroll = (function slideOnScrollModule() {
  var latestKnownScrollY = 0
  var ticking = false
  var imgs = document.querySelectorAll('.slide-in')
  var imgsOffsets = Array.from(imgs).map(img => img.offsetTop)

  var publicApi = {
    init,
  }

  return publicApi

  function init() {
    window.addEventListener('scroll', handleWindowScroll)
  }

  function handleWindowScroll() {
    latestKnownScrollY = window.scrollY
    requestTick()
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update)
    }
    ticking = true
  }

  function update() {
    var currentScrollY = latestKnownScrollY
    ticking = false

    var visibleImgsOffsets = imgsOffsets.filter(y => y < currentScrollY)
    visibleImgsOffsets.forEach((offset, index) => {
      imgs[index].classList.add('active')
    })
    console.log(imgsOffsets)
  }
})()

slideOnScroll.init()
