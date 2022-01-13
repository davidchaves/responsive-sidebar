let sidebar = document.querySelector('.sidebar')
let closeBtn = document.querySelector('#btn')
let searchBtn = document.querySelector('#search')

closeBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open')

  if (sidebar.classList.contains('open')) {
    searchBtn.placeholder = 'Search'
    searchBtn.style.backgroundPosition = 'left'
  } else {
    searchBtn.placeholder = ''
    searchBtn.style.backgroundPosition = 'center'
  }
})

searchBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open')

  if (sidebar.classList.contains('open')) {
    searchBtn.placeholder = 'Search'
    searchBtn.style.backgroundPosition = 'left'
  } else {
    searchBtn.placeholder = ''
    searchBtn.style.backgroundPosition = 'center'
  }
})
