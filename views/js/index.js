


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
