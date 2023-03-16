let element = document.querySelector(".wrapper");

let main = document.createElement("main")

main.innerHTML = `
<form class="deleteForm">
    <label for="resource">ID som skal slettes:</label>
    <input type="text" name="resource" id="resource">
    <button type="submit">DELETE!</button>
</form>
`
let deleteForm = main.querySelector(".deleteForm")

deleteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let id = e.target.resource.value
    if( isNaN(id) ) {
        main.innerHTML = `
        <h1>ERROR!</h1>
        <p>Du skal skrive et ID på en resource du vil have slettet</p>
        <p>Klik <a href="/delete.html">her</a> for at returnere til formularen.</p>
        `
    } else {
        main.innerHTML = `
        <h1>Pas på!!</h1>
        <p>Du er ved at slette resursen med id ${id}</p>
        <p>Er du sikker på at du vil gøre dette?</p>
        <button class="delete">SLET</button> <a href="/delete.html">Annuller</a>
        `
        main.querySelector(".delete").addEventListener("click", () => {
            console.log("You are ready to delete!")

            fetch(`http://localhost:4000/comments/${id}`, {
                method: "DELETE"
            })
           .then(response => {
                if(response.status !== 200) {
                    main.innerHTML = `
                    <h1>Error!</h1>
                    <p>Du prøver måske at slette en resurse som ikke findes</p>
                    <p>Klik <a href="/delete.html">her</a> for at komme tilbage til delete siden</p>
                    `
                } else {
                    main.innerHTML = `
                    <h2>Resuresen med id ${id} blev slettet</h2>
                    <p>Du bliver nu vidrestillet til forsiden.</p>
                    `
                     setTimeout(() => {
                        window.location.replace("/index.html")
                    }, 2200)
                }
           })
        })
    }  
})

element.append(main)