const typeAhead = (function panelGalleryModule() {
  const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

  const cities = []

  const publicApi = {
    init,
  }

  return publicApi

  function init() {
    fetchApiData().then(() => {
      document
        .querySelector('.search')
        .addEventListener('keyup', handleInputChange)
    })
  }

  function fetchApiData() {
    return fetch(endpoint)
      .then(response => response.json())
      .then(data => cities.push(...data))
  }

  function handleInputChange({ target: { value } }) {
    const suggestionList = getSuggestionList(value)
    renderList(suggestionList)
  }

  function getSuggestionList(value) {
    return cities.filter(({ city, state }) => {
      const searchTermRx = new RegExp(value, 'gi')
      return city.match(searchTermRx) || state.match(searchTermRx)
    })
  }

  function renderList(list) {
    const nodes = list.map(({ city, state }) => {
      return `<li>${city}, ${state}</li>`
    })
    document.querySelector('.suggestions').innerHTML = nodes.join('')
  }
})()

typeAhead.init()
