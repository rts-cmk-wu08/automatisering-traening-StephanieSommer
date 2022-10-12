import { hero } from "../../data.js";
import "./header.scss"
import headerArticle from "./headerArticle.js"

let header = function () {
    let element = document.createElement("header");
    element.classList.add("header");

    element.innerHTML = `
    <img src="${hero.image}" alt="">
`;

element.append(headerArticle(hero))

    return element;
};

export default header;
