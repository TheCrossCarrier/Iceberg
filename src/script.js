const
  search = document.querySelector('.search'),
  searchForm = document.querySelector('.search form')

mediaQueries()
window.onresize = mediaQueries

function mediaQueries() {
  
  /* Search relocate */
  if (window.matchMedia('(max-width: 1399.98px)').matches) {
    document.querySelector('.navbar-container').append(search)
  } else {
    document.querySelector('.top-bar>.row').prepend(search)
  }

}
