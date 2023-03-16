let ContactForm = function () {
    let element = document.createElement("form");
    element.classList.add("contactForm");

    element.innerHTML = `
    <div class="contactForm__group">
        <label for="firstname">Fornavn:</label>
        <input type="text" name="firstname" id="firstname" required minlength=2 >
    </div>

    <div class="contactForm__group">
        <label for="lastname">Efternavn:</label>
        <input type="text" name="lastname" id="lastname" required minlength=3 >
    </div>

    <div class="contactForm__group">
        <label for="address">Adresse:</label>
        <input type="text" name="address" id="address">
    </div>

    <div class="contactForm__group">
        <label for="zipCode">Post nr:</label>
        <input type="text" name="zipCode" id="zipCode" required pattern="[0-9]{4}" >
    </div>

    <div class="contactForm__group">
        <label for="city">By:</label>
        <input type="text" name="city" id="city">
    </div>

    <div class="contactForm__group">
        <label for="email">E-mail:</label>
        <input title="Indtast en valid e-mail adresse" type="email" name="email" id="email" required pattern="[A-Za-z0-9-._+]+@[A-Za-z0-9.-]+\[.]+[A-Za-z]{2,}">
    </div>

    <div class="contactForm__group">
        <label for="phoneNumber">Tlf. nr:</label>
        <input type="text" name="phoneNumber" id="phoneNumber" required pattern="[0-9]{8}">
    </div>
    
    <div class="contactForm__group">
        <label for="message">Besked:</label>
        <textarea name="message" id="message" cols="30" rows="10" required minlength=10 ></textarea>
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

        fetch("http://localhost:4000/comments", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    });

    return element;
};

export default ContactForm;
