import section from "./components/section.js";
import header from "./components/header/header.js";
import contactForm from "./components/contactForm.js"

let element = document.querySelector(".wrapper");
let main = document.createElement("main")
element.append(header());
element.append(main)
main.append(section());
main.append(contactForm())
