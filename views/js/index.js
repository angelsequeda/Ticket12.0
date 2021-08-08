
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
        document.getElementById('cashflowrowthead').insertAdjacentHTML("beforeend",`<th id='${data}monthrowcashflow${num}'>${data}</th>`);
        document.getElementById('Ingresos').insertAdjacentHTML("beforeend",`<td><input type='text' id=earningsinputcashflow${num} disabled></td>`);
        document.getElementById('Egresos').insertAdjacentHTML("beforeend",`<td><input type='text' id=costinputcashflow${num} disabled></td>`);
        document.getElementById('Total').insertAdjacentHTML("beforeend",`<td><input type='text' id=totalinputcashflow${num} disabled></td>`);
        document.getElementById('Acumulado').insertAdjacentHTML("beforeend",`<td><input type='text' id=acumuladoinputcashflow${num} disabled></td>`);
        document.getElementById('earningsthead').insertAdjacentHTML("beforeend",`<th id='${data}monthrowearnings${num}'>${data}</th>`);
        document.getElementById('directcosthead').insertAdjacentHTML("beforeend",`<th id='${data}monthrowdirectcost${num}'>${data}<input type="checkbox" id="directcolumnforcalculusdirectcost${num}" disabled></th>`);
        document.getElementById('admincosthead').insertAdjacentHTML("beforeend",`<th id='${data}monthrowadmincost${num}'>${data}</th>`);
        document.getElementById('resourcesthead').insertAdjacentHTML("beforeend",`<th id='${data}monthrowresources${num}'>${data}</th>`);
        document.getElementById('resourcescosthead').insertAdjacentHTML("beforeend",`<th id='${data}monthresourcecost${num}'>${data}</th>`);
        document.getElementById('resourcebalancethead').insertAdjacentHTML("beforeend",`<th id='${data}monthresourcecost${num}'>${data}</th>`);
        
    }
    
    static createbuttons(name) {
        
        let butttonFreeedit = `<button type= "button" style="margin=left:1px" class= "btn btn-primary" id="butttonFreeedit${name}">Edit</button>`;
        let buttonSumatory = `<button type= "button" style="margin=left:1px" class= "btn btn-primary" id="buttonSumatory${name}">Sumar</button>`;
        let buttonPercent = `<button type= "button" class= "btn btn-primary" id="buttonPercent${name}">%</button>`
        
        document.getElementById(name).insertAdjacentHTML('beforeend',butttonFreeedit);
        document.getElementById(name).insertAdjacentHTML('beforeend',buttonSumatory);
        document.getElementById(name).insertAdjacentHTML('beforeend',buttonPercent)

    }

    static buttonsabilitate(name,abilitate) {
        
        document.getElementById(name).addEventListener('click' ,()=> {
            console.log('bien');
            document.getElementById(abilitate).disabled = false;
        });

    }

    static buttonsumatories(name,num) {
        document.getElementById(name).addEventListener('click', ()=> {
            for (let index = 1; index <= num; index++) {
                document.getElementById(`directcolumnforcalculusdirectcost${index}`).disabled = false;
            }
        },true)
    }

    
}


export class functionsButtons {

    static buttonsum(name,num,rows,table) {
        let resultvertical = 0;
        let resulthorizontal = 0;
        document.getElementById(name).addEventListener('click', ()=> {
            for (let index = 1; index <= num; index++) {
                resulthorizontal+= document.getElementById(table+index.toString).value;
            }
            for (let index = 1; index <= rows; index++) {
                resultvertical+= document.getElementById(table+index.toString).value;
            }
        })
        return [resultvertical,resulthorizontal];
    }

    static addmonthcolumn(month,num,rows1,rows2,rows3,rows4,rows5,rows6,rows7) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById(`table${i}totalhead`).insertAdjacentHTML("beforebegin",`<th id="monthheadtable${i}${num}
            ">${month}</th>`);
            if (i < 9 && i>1) {
                document.getElementById(`table${i}totalfile`).insertAdjacentHTML("beforeend",`<td id=totalpermonthtable${i}${num}><input disabled id="totalpermonthinputtable${i}${num}"></td>`)
            }
        }

        
        document.getElementById(`totalearningstable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalearningspermonthtable1${num}"> </td>`);
        document.getElementById(`totalexpensestable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalexpensespermonthtable1${num}"> </td>`);
        document.getElementById(`totalacumulatedtable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalacumulatedpermonthtable1${num}"> </td>`);
        document.getElementById(`totaltotaltable1`).insertAdjacentHTML("beforebegin",`<td id="totaltotaltable1${num}"><input disabled type="text" id="totaltotalpermonthtable1${num}"> </td>`);

        if (rows1 > 0) {
            for (let index = 1; index <= rows1; index++) {
                document.getElementById(`totalearningsperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="earningsinput${index}${num}"></td>`)
                
            }
        }

        if (rows2 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaldirectcostperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="directcostinput${index}${num}"></td>`)
                
            }            
        }

        if (rows3 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaladmincostperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="admincost${index}${num}"><input type="text" id="admincostinput${index}${num}"></td>`);
                
            } 
        }
        
    }

    static addrowearnings(rows,columns) {
        document.getElementById(`table2totalfile`).insertAdjacentHTML("beforebegin",`<tr id="earningrow${rows}"><td id="conceptearnings${rows}"><input id="conceptearningsinput${rows}" type="text"></td><td id="totalearningsperconcept${rows}"><input type="text" id="totalearningsperconceptinput${rows}" disabled></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totalearningsperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="earnings${rows}${index}"><input type="text" id="earningsinput${rows}${index}"></td>`);
            
        }
    }

    static addrowdirectcost(rows,columns) {
        document.getElementById(`table3totalfile`).insertAdjacentHTML("beforebegin",`<tr id="direccostrow${rows}"><td id="conceptdirectcost${rows}"><input id="conceptdirectcostinput${rows}" type="text"></td><td id="totaldirectcostperconcept${rows}"><input type="text" id="totaldirectcostperconceptinput${rows}" disabled></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaldirectcostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="directcost${rows}${index}"><input type="text" id="directcostinput${rows}${index}"></td>`);
            
        }
    }

    static addrowsadmincost(rows,columns) {
        document.getElementById(`table4totalfile`).insertAdjacentHTML("beforebegin",`<tr id="admincostrow${rows}"><td id="conceptadmincost${rows}"><input id="conceptadmincostinput${rows}" type="text"></td><td id="totaladmincostperconcept${rows}"><input type="text" id="totaladmincostperconceptinput${rows}" disabled></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaladmincostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="admincost${rows}${index}"><input type="text" id="admincostinput${rows}${index}"></td>`);
            
        }
    }

    static addrowsresources(rows,columns) {
        document.getElementById(`table5totalfile`).insertAdjacentElement("beforebegin",`<tr id="resourcesrow${rows}"><td id="resourcesconcept${rows}"><input id="resourcesconceptinput${rows}" type="text"></td><td id="totalresourceperconcept${rows}"><input type="text" id="totalresourceperconcepttinput${rows}" disabled></td></tr>`)
    }
}

