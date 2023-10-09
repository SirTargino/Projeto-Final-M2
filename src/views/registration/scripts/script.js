var persons = []

var sendButton = document.getElementById("send")

var id = 1

sendButton.addEventListener("click", ()=>{
        var nameInp = document.getElementById("nameInput").value;
        var ageInp = document.getElementById("ageInput").value;
        var genderInp = document.getElementById("genderInput").value;
        var mailInp = document.getElementById("mailInput").value;
        var phoneInp = document.getElementById("phoneInput").value;
        var passwordInp = document.getElementById("passwordInput").value;

        var created = createPerson(nameInp, ageInp, genderInp, mailInp)
        persons.push(created)
})