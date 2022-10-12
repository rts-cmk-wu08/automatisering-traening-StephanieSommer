
let headerArticle = function(hero) {

let element = document.createElement('article')
element.classList.add('headerArticle')

element.innerHTML = `
    <h1 class="headerArticle__headline">${hero.headline}</h1>
    <p class="headerArticle__text">${hero.copy}</p>
    <a class="headerArticle__exploreButton" href="#">Explore</a>
    <!-- <button><img class="headerArticle__icon" src="${hero.icon}" alt="">Explore</button> -->
    <!-- <a class="headerArticle__icon" href="">${hero.icon} Explore</a> -->
    <!-- <img src="${hero.icon}" alt=""> -->
`

return element
}

export default headerArticle