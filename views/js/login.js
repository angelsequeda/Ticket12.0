import { Budget, User } from './classes.js';
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

        if(frontValidations.passwordValidationSimilar(document.getElementById('password').value,document.getElementById('secondpassword').value)) {

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
            window.open('../html/indexbudgin.html','_self');
        }

    }
    
})


document.getElementById('changerButton').addEventListener('click', async() => {

    let newChange =new User( {username: document.getElementById('usernameChanger').value,
        pass_word: document.getElementById('passwordChanger').value,
    });

    let newpass_word =  document.getElementById('newpass_word').value;
    if(frontValidations.passwordValidationSimilar(newChange.pass_word,newChange.newpass_word)){
        alert('La contraseña nueva y la antigua no pueden ser iguales');
    } else {

        try {
        
            let result = await newChange.changePassword(newpass_word);
            alert(result);
            document.getElementById('usernameChanger').value ="";
            document.getElementById('passwordChanger').value ="";
            document.getElementById('newpass_word').value ="";
        } catch (error) {
            alert(error.message);
        }
    }
    
          
})

document.getElementById('cancelButton').addEventListener('click', ()=> {
    document.getElementById('usernameChanger').value ="";
    document.getElementById('passwordChanger').value ="";
    document.getElementById('newpass_word').value ="";
})

/*let earnings = [{id_presupuesto: "1123a", concepto: "ganancia", mes: "marzo", total:125}]
let directcost = [{id_presupuesto: "1123a", concepto: "ganancia", mes: "marzo", total:125}]
let admincost = [{id_presupuesto: "1123a", concepto: "ganancia", mes: "marzo", total:125}]
let resources = [{id_presupuesto: "1123a", concepto: "ganancia", mes: "marzo", costo:125,porcentaje:0.2}]
let budget = {id_presupuesto:"1123a",proyecto:"algonuevo"}

let budgetnew = new Budget(budget.id_presupuesto);
budgetnew.addInfoBudget(budget,earnings,directcost,admincost,resources)*/