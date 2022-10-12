import section from "./components/section.js"
import header from "./components/header/header.js"

let element = document.querySelector(".wrapper")
element.append(header())
element.append(section())