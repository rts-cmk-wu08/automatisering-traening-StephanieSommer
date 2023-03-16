
let updateForm = function (id) {

    let element = document.createElement("form");
    element.classList.add("contactForm");

    fetch(`http://localhost:4000/comments/${id}`)
    .then(response => {
        
        if(response.status !== 200) {
            throw "Something went wrong"
        }

        return response.json()
    })
    .then(data => {
        console.log(data)


    element.innerHTML = `
    <div class="contactForm__group">
        <label for="firstname">Fornavn:</label>
        <input value="${data.firstname}" type="text" name="firstname" id="firstname" required minlength=2 >
    </div>

    <div class="contactForm__group">
        <label for="lastname">Efternavn:</label>
        <input value="${data.lastname}" type="text" name="lastname" id="lastname" required minlength=3 >
    </div>

    <div class="contactForm__group">
        <label for="address">Adresse:</label>
        <input value="${data.address}" type="text" name="address" id="address" required>
    </div>

    <div class="contactForm__group">
        <label for="zipCode">Post nr:</label>
        <input value="${data.zipCode}" type="text" name="zipCode" id="zipCode" required pattern="[0-9]{4}" >
    </div>

    <div class="contactForm__group">
        <label for="city">By:</label>
        <input value="${data.city}" type="text" name="city" id="city">
    </div>

    <div class="contactForm__group">
        <label for="email">E-mail:</label>
        <input value="${data.email}" title="Indtast en valid e-mail adresse" type="email" name="email" id="email" required pattern="[A-Za-z0-9-._+]+@[A-Za-z0-9.-]+\[.]+[A-Za-z]{2,}">
    </div>

    <div class="contactForm__group">
        <label for="phoneNumber">Tlf. nr:</label>
        <input value="${data.phoneNumber}" type="text" name="phoneNumber" id="phoneNumber" required pattern="[0-9]{8}">
    </div>
    
    <div class="contactForm__group">
        <label for="message">Besked:</label>
        <textarea name="message" id="message" cols="30" rows="10" required minlength=10 >${data.message}</textarea>
    </div>

    <!-- <input type="range" min="0" max="1000" step="250"> -->

   <button type="submit">Send!</button>
`;

    element.addEventListener("submit", function (e) {
        e.preventDefault();

        let data = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            address: e.target.address.value,
            zipCode: e.target.zipCode.value,
            city: e.target.city.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            message: e.target.message.value,
        };

        // console.log(data)

        fetch(`http://localhost:4000/comments/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if(response.status === 200) {
                    console.log("Resurser opdateret")

                    element.innerHTML = `
                        <h1>Din kommentar er blever opdateret!</h1>
                    `

                    setTimeout(() => {
                        window.location.replace("/index.html")
                    }, 1500)
                }
            })
            // .then((data) => console.log(data));
    });

})
.catch(error => {
    console.log(error)

    element.innerHTML = `
        <h1>There was an error</h1>
        <p>It looks like you are trying to modify a non existing resource</p>
        <p>Click <a href="/index.html">here</a> to return to the front page</p>
    `
})

    return element;
};

export default updateForm;

