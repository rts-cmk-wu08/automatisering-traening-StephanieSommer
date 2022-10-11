import { hero } from "../../data.js";
import "./header.scss"

let header = function () {
    let element = document.createElement("header");
    element.classList.add("header");

    element.innerHTML = `
    <img src="${hero.image}" alt="">
`;

    return element;
};

export default header;
