

var persons = []

var sendButton = document.getElementById("send")

var id = 1

// class createPerson {
//         constructor(name, age, gender, email, password){
//                 this.name = name,
//                 this.age = age,
//                 this.gender = gender,
//                 this.email = email,
//                 this.password = password
//         }

        // cadastrar(){
        //         const name = this.name;
        //         const age = this.age;
        //         const gender = this.gender;
        //         const email = this.email;
        //         const password = this.password

        //         if(!name || !age || !gender || !email || !password){
        //                 console.log("Preencha todos os campos!!")
        //                 return
        //         }

        //         const dados = {
        //                 name,
        //                 age,
        //                 gender,
        //                 email,
        //                 password
        //         }

        //         persons.push(dados)
        //         console.log(persons)
        // }
// }

sendButton.addEventListener("click", ()=>{
        var nameInp = document.getElementById("nameInput").value;
        var ageInp = document.getElementById("ageInput").value;
        var genderInp = document.getElementById("genderInput").value;
        var mailInp = document.getElementById("mailInput").value;
        var phoneInp = document.getElementById("phoneInput").value;
        var passwordInp = document.getElementById("passwordInput").value;

        var created = new createPerson(nameInp, ageInp, genderInp, mailInp, passwordInp, phoneInp)
        
})

