import {frontValidations, usersProcediments} from './index.js';


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

    if(frontValidations.validationsRegisterfromFront(newUser)) {

        if(frontValidations.passwordValidationSimilar()) {

            let result = await usersProcediments.registerUser(newUser);
            if(typeof result === "string") {
                alert(result);
            } else {
                log(result);
            }
        }else {
            alert('Las contraseñas no coinciden');
        }
    }else {
        alert('Faltan campos por llenar');
    }
    
})

document.getElementById('startButton').addEventListener('click', async ()=> {

    let userTrying = {

        username: document.getElementById('usernameLogin').value,
        pass_word: document.getElementById('passwordLogin').value,

    }
    
    if(frontValidations.validationsLoginfromFront(userTrying)) { 

        let result =  await usersProcediments.searchForUser(userTrying);
        if( typeof result === 'string') {

            alert(result);
        } else {

            console.log(result);
        }

    }
    
})


document.getElementById('changerButton').addEventListener('click', async() => {

    let newChange = {username: document.getElementById('usernameChanger').value,
        pass_word: document.getElementById('passwordChanger').value,
        newpass_word: document.getElementById('newpass_word').value
    };

    try {
        
        let result = await usersProcediments.changePassword(newChange);
        alert(result);
    } catch (error) {
        alert(error.message);
    }
          
})