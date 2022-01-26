const container = document.querySelector('.container')

const display = (array) => {
  const content = array
    .map((ppl) => {
      const { avatar_url, login, html_url } = ppl
      return `
    <article class ='card'>
    <img src=${avatar_url} alt=${login} />
    <h4>${login}</h4>
    <a href=${html_url} class='btn'>view profile</a>
    </article>
    `
    })
    .join('')

  container.innerHTML = content
}

export default display
