import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const title = document.querySelector('.section-title h1')
const btns = document.querySelector('.btn-container')
let index = 0
let pages = []

const setUI = () => {
  displayFollowers(pages[index])
  displayButtons(pages, index)
}

btns.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index)
  }
  if (e.target.classList.contains('next-btn')) {
    index++
    if (index > pages.length - 1) {
      index = 0
    }
  }

  if (e.target.classList.contains('prev-btn')) {
    index--
    if (index < 0) {
      index = pages.length - 1
    }
  }

  setUI()
})

window.addEventListener('load', async () => {
  const ppl = await fetchFollowers()
  title.textContent = 'pagination'
  pages = paginate(ppl)
  setUI()
})
