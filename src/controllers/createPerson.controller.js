

function createPerson(name, age, gender, email, password, id) {

        // Validação basica do formulario
        if(!name || !age || !gender || !email || !password){
                console.log("Preencha todos os campos!!")
                return
        }

        // criei um objeto contendo todos os valores dos inputs para deixar o codigo mais estruturado
        const dados = {
                name,
                age,
                gender,
                email,
                password
        }

        // Enviei os dados recebidos pro LocalStorage e para uma  array
        let existDados = localStorage.getItem('DadosUsuarios')

        if(existDados){
                existDados = JSON.parse(localStorage.getItem('DadosUsuarios'))
        }else{
                existDados = [];
        }

        existDados.push(dados)
        localStorage.setItem('DadosUsuarios', JSON.stringify(existDados))
        console.log(existDados)
}

