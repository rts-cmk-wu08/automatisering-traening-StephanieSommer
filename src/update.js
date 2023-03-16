import updateForm from "./components/updateForm.js"

let params = new URLSearchParams(window.location.search)
let id = params.get("id")

console.log(id)

let element = document.querySelector(".wrapper");
let main = document.createElement("main")

main.append(updateForm(id))

element.append(main)