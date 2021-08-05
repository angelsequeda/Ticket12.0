


export class usersProcediments {

    static async searchForUser(data) {

        let result = await fetch('http://localhost:3000/users/myuser', {
            

            method:'POST',

            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },

            body: JSON.stringify({username: data.username, pass_word:data.pass_word})

        });

        let resultJSON = result.json();
        return resultJSON;
    }


    static async registerUser(data) {

        let result = await fetch('http://localhost:3000/users/newuser', {
            method: 'POST',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({

                nombre1: data.nombre1,
                nombre2: data.nombre2,
                apellido1: data.apellido1,
                apellido2: data.apellido2,
                username: data.username,
                pass_word: data.pass_word,
                mail: data.mail,
                activo: 1

            })
        })

        let resultJSON = result.json();
        return resultJSON;
    }
}


export class frontValidations {

    static  passwordValidationSimilar() {

        let password = document.getElementById('password').value;
        let passwordComprobation = document.getElementById('secondpassword').value;
        if( password === passwordComprobation) {

            return true;

        } else {

            return false;
        }

    }

    static  validationsRegisterfromFront(data) {
        if(!data.nombre1 || !data.apellido1 || !data.apellido2 || !data.username || !data.pass_word || !data.mail) {
            

            return false;

        }else {

            return true;

        }

    }

    static  validationsLoginfromFront(data) {

        if( !data.username || !data.pass_word) {

            alert('Falta usuario o contraseña');
            return false;

        } else {

            return true;

        }

    }
}