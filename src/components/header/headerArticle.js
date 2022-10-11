let article = function() {

let element = document.createElement('article')
element.classList.add('headerArticle')

element.innerHTML = `
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <a href="${hero.icon}">Explore</a>
`

return element
}

export default article