import {usersProcediments} from './index.js';


document.getElementById('registerButton').addEventListener('click', async () => {

    let newUser = {
        nombre1: document.getElementById('firstname').value,
        nombre2:  document.getElementById('secondname').value,
        apellido1:  document.getElementById('firstlastname').value,
        apellido2:  document.getElementById('secondlastname').value,
        mail:  document.getElementById('mail').value,
        pass_word:  document.getElementById('password').value,
        username:  document.getElementById('username').value
    }
    console.log(newUser);
    let result = await usersProcediments.registerUser(newUser);

    console.log(result);
    
})