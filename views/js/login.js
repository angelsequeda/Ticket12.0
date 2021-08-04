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
    
    if (frontValidations.passwordValidationSimilar() && frontValidations.validationsRegisterfromFront(newUser) && document.getElementById("companyCode").value === 'TECLA2.0'){
        
        let result = await usersProcediments.registerUser(newUser);
        alert(result);

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