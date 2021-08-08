
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


    static addmonthcolumn(month,num,rows1,rows2,rows3,rows4) {
        for (let i = 1; i <= 8; i++) {
            document.getElementById(`table${i}totalhead`).insertAdjacentHTML("beforebegin",`<th id="monthheadtable${i}${num}
            ">${month}</th>`);
            if (i < 9 && i>1) {
                document.getElementById(`table${i}totalfile`).insertAdjacentHTML("beforeend",`<td id=totalpermonthtable${i}${num}><input disabled id="totalpermonthinputtable${i}${num}" value="0"></td>`)
            }
        }

        document.getElementById("totalsalestable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalsales${num}" value= "0"></td>`);
        document.getElementById("totalcosttable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalcost${num}" value = "0"></td>`);
        document.getElementById("totalmargintable8td").insertAdjacentHTML("beforebegin",`<td><input disabled type="text" id="totalmargin${num} value="0"></td>`);
        
        document.getElementById(`totalearningstable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalearningspermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totalexpensestable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalexpensespermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totalacumulatedtable1`).insertAdjacentHTML("beforebegin",`<td id="totalearningstable1${num}"><input disabled type="text" id="totalacumulatedpermonthtable1${num}" value="0"> </td>`);
        document.getElementById(`totaltotaltable1`).insertAdjacentHTML("beforebegin",`<td id="totaltotaltable1${num}"><input disabled type="text" id="totaltotalpermonthtable1${num}" value="0"> </td>`);

        

        if (rows1 > 0) {
            for (let index = 1; index <= rows1; index++) {
                document.getElementById(`totalearningsperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="earningsinput${index}${num}" value="0"></td>`);
            }
        }

        if (rows2 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaldirectcostperconcept${index}`).insertAdjacentHTML('beforebegin',`<td id= "earnings${index}${num}"><input type="text" id="directcostinput${index}${num}" value="0"></td>`)
                
            }            
        }

        if (rows3 > 0) {
            for (let index = 1; index <= rows2; index++) {
                document.getElementById(`totaladmincostperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="admincost${index}${num}"><input type="text" id="admincostinput${index}${num}" value="0"></td>`);
                
            } 
        }

        if (rows4 > 0) {
            for (let index = 1; index <= rows4; index++) {
                document.getElementById(`totalresourceperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resource${index}${num}"><input type="text" id="resourcepercentinput${index}${num}" value="0"><input type="text" id="resourcecostinput${index}${num}"></td>`);
                document.getElementById(`totalresourcecostperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${index}${num}"><input disabled type="text" id="resourcecostnotoriginalinput${index}${num}" value="0"></td>`);
                document.getElementById(`totalresourcebalanceperconcept${index}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${index}${num}"><input disabled type="text" id="resourcebalanceinput${index}${num}" value="0"></td>`);
                
            } 
        }
        
    }

    static addrowearnings(rows,columns) {
        document.getElementById(`table2totalfile`).insertAdjacentHTML("beforebegin",`<tr id="earningrow${rows}"><td id="conceptearnings${rows}"><input id="conceptearningsinput${rows}" type="text" ></td><td id="totalearningsperconcept${rows}"><input type="text" id="totalearningsperconceptinput${rows}" disabled value="0"></td><td><button type="button" class="btn btn-danger" id="buttondeleteearning${rows}">Borrar</button></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totalearningsperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="earnings${rows}${index}"><input type="text" id="earningsinput${rows}${index}" value="0" ></td>`);
            
        }


    }

    static addrowdirectcost(rows,columns) {
        document.getElementById(`table3totalfile`).insertAdjacentHTML("beforebegin",`<tr id="direccostrow${rows}"><td id="conceptdirectcost${rows}"><input id="conceptdirectcostinput${rows}" type="text" ></td><td id="totaldirectcostperconcept${rows}"><input type="text" id="totaldirectcostperconceptinput${rows}" disabled value="0"></td><td><button type="button" class="btn btn-danger" id="buttondeletedirectcost${rows}">Borrar</button></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaldirectcostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="directcost${rows}${index}"><input type="text" id="directcostinput${rows}${index}" value="0"></td>`);
            
        }
    }

    static addrowsadmincost(rows,columns) {
        document.getElementById(`table4totalfile`).insertAdjacentHTML("beforebegin",`<tr id="admincostrow${rows}"><td id="conceptadmincost${rows}"><input id="conceptadmincostinput${rows}" type="text" ></td><td id="totaladmincostperconcept${rows}"><input type="text" id="totaladmincostperconceptinput${rows}" disabled value="0"></td><td><button type="button" class="btn btn-success" id="buttonacceptadmincost${rows}">OK</button><button type="button" class="btn btn-danger" id="buttondeleteadmincost${rows}">Borrar</button></td></tr>`);
        
        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totaladmincostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="admincost${rows}${index}"><input type="text" id="admincostinput${rows}${index}" value="0"></td>`);
            
        }
    }

    static addrowsresources(rows,columns) {
        document.getElementById(`table5totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resourcesrow${rows}"><td id="resourcesconcept${rows}"><input id="resourcesconceptinput${rows}" type="text"></td><td id="totalresourceperconcept${rows}"><input type="text" id="totalresourceperconcepttinput${rows}" disabled value="0"></td><td><button type="button" class="btn btn-success" id="buttonacceptresource${rows}">OK</button><button type="button" class="btn btn-danger" id="buttondeleteresource${rows}">Borrar</button></td></tr>`);
        document.getElementById(`table6totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resourcecostrow${rows}"><td id="resoucecostconcept${rows}"><input value="0" disabled id="resoucecostconceptinput${rows}" type="text"></td><td id="totalresourcecostperconcept${rows}"><input value="0" type="text" id="totalresourcecostperconceptinput${rows}" disabled></td></tr>`);
        document.getElementById(`table7totalfile`).insertAdjacentHTML("beforebegin",`<tr id="resoucebalancerow${rows}"><td id="resoucebalanceconcept${rows}"><input value="0" disabled id="resoucebalanceconceptinput${rows}" type="text"></td><td id="totalresourcebalanceperconcept${rows}"><input type="text" id="totalresourcebalanceperconceptinput${rows}" disabled value="0"></td></tr>`);

        for (let index = 1; index <= columns; index++) {
            document.getElementById(`totalresourceperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resource${rows}${index}"><input type="text" id="resourcepercentinput${rows}${index}" ><input type="text" id="resourcecostinput${rows}${index}" value="0"></td>`);
            document.getElementById(`totalresourcecostperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${rows}${index}" value="0"><input disabled type="text" id="resourcecostnotoriginalinput${rows}${index}"></td>`);
            document.getElementById(`totalresourcebalanceperconcept${rows}`).insertAdjacentHTML("beforebegin",`<td id="resourcecost${rows}${index}" value="0"><input disabled type="text" id="resourcebalanceinput${rows}${index}"></td>`);
            
        }
    }

    static buttonsacceptearnings(rows,columns) {
        
        let sumhorizontal = 0;
        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;

            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`earningsinput${j}${i}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totalearningsperconceptinput${j}`).value = sumvertical;
        }
        let sumtotal = 0;
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`earningsinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            sumtotal+= sumvertical;
            document.getElementById(`totalpermonthinputtable2${j}`).value = sumvertical;
            document.getElementById(`totalearningspermonthtable1${j}`).value = sumvertical;
            
        }
        document.getElementById(`totalearningstable1input`).value = sumtotal;
        this.actualtotalCashflow(columns);
    }

    static deleteearningrow(rows,columns) {
        for( let i=1; i<=columns; i++) {
            document.getElementById(`totalearningspermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalearningspermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`earningsinput${rows}${i}`).value)
        }
        document.getElementById(`earningrow${rows}`).remove();
        this.buttonsacceptearnings(rows-1,columns);
        this.actualtotalCashflow(columns);
    }

    static buttonacceptdirectcost(rows,columns) {
        
        let sumhorizontal = 0;
        for( let j=1; j<=rows; j++) {
            let sumvertical = 0;

            for( let i=1; i<=columns; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`directcostinput${j}${i}`).value);
                } catch (error) {
                    
                }
            }
            document.getElementById(`totaldirectcostperconceptinput${j}`).value = sumvertical;
        }
        let sumtotal = 0;
        for( let j=1; j<=columns; j++) {
            let sumvertical = 0;
            for( let i=1; i<=rows; i++) {
                try {
                    sumvertical+= Number.parseFloat(document.getElementById(`directcostinput${i}${j}`).value);
                } catch (error) {
                    
                }
            }
            sumtotal+= sumvertical;
            document.getElementById(`totalpermonthinputtable3${j}`).value = sumvertical;
            document.getElementById(`totalexpensespermonthtable1${j}`).value = sumvertical;
            
        }
        document.getElementById(`totalexpesenstable1input`).value = sumtotal;
        this.actualtotalCashflow(columns);
    }

    static deletedirectcostrow(rows,columns) {
        for( let i=1; i<=columns; i++) {
            document.getElementById(`totalexpensespermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalexpensespermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`directcostinput${rows}${i}`).value)
        }
        document.getElementById(`direccostrow${rows}`).remove();
        this.buttonacceptdirectcost(rows-1,columns)
        this.actualtotalCashflow(columns);
    }

    static actualtotalCashflow(columns) {
        let sumtotal = 0;
        for(let i = 1; i<=columns; i++){
            document.getElementById(`totaltotalpermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totalearningspermonthtable1${i}`).value)-Number.parseFloat(document.getElementById(`totalexpensespermonthtable1${i}`).value);
            sumtotal+= Number.parseFloat(document.getElementById(`totaltotalpermonthtable1${i}`).value);
            if (i>1) {
                document.getElementById(`totalacumulatedpermonthtable1${i}`).value = Number.parseFloat(document.getElementById(`totaltotalpermonthtable1${i}`).value) + Number.parseFloat(document.getElementById(`totalacumulatedpermonthtable1${i-1}`).value)
            } 
        }
        document.getElementById(`totaltotaltable1input`).value= sumtotal;
    }

}

