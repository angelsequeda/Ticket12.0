
export class frontValidations {

    static  passwordValidationSimilar(password,passwordComprobation) {

        
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

export class Renderizer {

    constructor() {

        this.button = document.createElement('button');
    }
    
    static renderIndex(data) {
        let table = document.getElementById('bodyindex');
        data.forEach(element1 => {
            let file = document.createElement('tr');
            let listProperties = Object.keys(element1);
            listProperties.forEach(element2 => {
                let newcolumn = document.createElement('td');
                newcolumn.textContent = element1[element2];
                file.appendChild(newcolumn);
            });
            let newcolumn1 = document.createElement('td');
            newcolumn1.innerHTML = `<button class ='btn btn-success' id='${element1.id_presupuesto}send'>Enviar</button>`;
            let newcolumn2 = document.createElement('td');
            newcolumn2.innerHTML = `<button class ='btn btn-info' id='${element1.id_presupuesto}edit'>Editar</button>`;
            let newcolumn3 = document.createElement('td');
            newcolumn3.innerHTML = `<button class ='btn btn-danger' id='${element1.id_presupuesto}delete'>Eliminar</button>`
            file.appendChild(newcolumn1);
            file.appendChild(newcolumn2);
            file.appendChild(newcolumn3);
            table.appendChild(file);
        });
    }

    static activeButtonsIndex(data) {

        data.forEach(element => {

            document.getElementById(element.id_presupuesto+'send').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            });
            document.getElementById(element.id_presupuesto+'edit').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            });
            document.getElementById(element.id_presupuesto+'delete').addEventListener('click', ()=> {
                console.log(element.id_presupuesto);
            })
        });
    }
}


export class renderTablesBudget {


    static cashflowrows() {

        let info = ['Ingresos','Egresos','Total','Acumulado'];
        info.forEach(element => {
            let newfile = document.createElement('tr');
            newfile.id = element;
            newfile.textContent = element;
            document.getElementById("flowcashtbody").appendChild(newfile);
        });

    }

    static cashflowcolumns(data,num) {
        document.getElementById('cashflowrowthead').innerHTML+=`<th id='${data}monthrowcashflow${num}'>${data}</th>`;
        document.getElementById('Ingresos').innerHTML+=`<td><input type='text' id=earningsinputcashflow${num} disabled></td>`;
        document.getElementById('Egresos').innerHTML+=`<td><input type='text' id=costinputcashflow${num} disabled></td>`;
        document.getElementById('Total').innerHTML+=`<td><input type='text' id=totalinputcashflow${num} disabled></td>`;
        document.getElementById('Acumulado').innerHTML+=`<td><input type='text' id=acumuladoinputcashflow${num} disabled></td>`;
        document.getElementById('earningsthead').innerHTML+=`<th id='${data}monthrowearnings${num}'>${data}</th>`;
        document.getElementById('directcosthead').innerHTML+=`<th id='${data}monthrowdirectcost${num}'>${data}</th>`;
        document.getElementById('admincosthead').innerHTML+=`<th id='${data}monthrowadmincost${num}'>${data}</th>`;
        document.getElementById('resourcesthead').innerHTML+=`<th id='${data}monthrowresources${num}'>${data}</th>`;
    }

    static createbuttons(name) {
        
        console.log(name);
        let butttonFreeedit = `<button type= "button" style="margin=left:1px" class= "btn btn-primary" id="butttonFreeedit${name}">Edit</button>`;
        let buttonSumatory = `<button type= "button" style="margin=left:1px" class= "btn btn-primary" id="buttonSumatory${name}">Sumar</button>`;
        let buttonPercent = `<button type= "button" class= "btn btn-primary" id="buttonPercent${name}">%</button>`
        
        document.getElementById(name).innerHTML+=butttonFreeedit+buttonSumatory+buttonPercent;

    }

    static buttonsabilitate(name,abilitate) {
        console.log(name);
        console.log(abilitate);
        document.getElementById(name).addEventListener('click' ,()=> {
            console.log('bien');
            document.getElementById(abilitate).disabled = false;
        });

    }

}