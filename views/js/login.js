import { User } from './classes.js';
import {frontValidations} from './index.js';


document.getElementById('registerButton').addEventListener('click', async () => {

    let newUser = new User({
        nombre1: document.getElementById('firstname').value,
        nombre2:  document.getElementById('secondname').value,
        apellido1:  document.getElementById('firstlastname').value,
        apellido2:  document.getElementById('secondlastname').value,
        mail:  document.getElementById('mail').value,
        pass_word:  document.getElementById('password').value,
        username:  document.getElementById('username').value
    });

    if(frontValidations.validationsRegisterfromFront(newUser)) {

        if(frontValidations.passwordValidationSimilar()) {

            let result = await newUser.registerUser();
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

    let userTrying = new User({

        username: document.getElementById('usernameLogin').value,
        pass_word: document.getElementById('passwordLogin').value,

    });
    
    if(frontValidations.validationsLoginfromFront(userTrying)) { 
        userTrying.startSession();
        let result =  await userTrying.searchForUser();
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

