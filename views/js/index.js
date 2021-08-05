
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