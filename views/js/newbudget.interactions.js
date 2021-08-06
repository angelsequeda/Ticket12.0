import { renderTablesBudget } from "./index.js";

let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let num = 0;
let rowsinEarnings = 0;
let rowsinDirectcost = 0;
let rowsinAdmincost = 0;
let rowsinresources = 0;
document.getElementById('monthselect').addEventListener('change',()=> {
    num+=1;
    document.getElementById("conceptcolumn").hidden = false;
    document.getElementById("conceptcolumnearnings").hidden = false;
    document.getElementById("conceptcolumndirectcost").hidden = false;
    document.getElementById("conceptcolumnadmincost").hidden = false;
    document.getElementById("buttonearningsadd").hidden = false;
    document.getElementById("buttondirectcostadd").hidden = false;
    document.getElementById("buttonadmincostadd").hidden = false;
    document.getElementById('buttonresourceadd').hidden = false;
    document.getElementById('conceptcolumnresources').hidden = false;
    document.getElementById('addmonthbutton').hidden = false;
    document.getElementById("conceptcolumnresourcecost").hidden = false;
    
    let index = months.findIndex((element) => {
        return element === document.getElementById('monthselect').value;
    });
    months2 = months.slice(index+1);
    console.log(months2);
    renderTablesBudget.cashflowrows();
    renderTablesBudget.cashflowcolumns(document.getElementById('monthselect').value,num);

    document.getElementById('monthselect').disabled = true;
    document.getElementById('cashflowrowthead').innerHTML+=`<th  scope="col" class="column" id="totalcolumncashflow" >Total</th>`;
    document.getElementById('Ingresos').innerHTML+=`<td id="delete1"><input type='text' id="totalearningsinputcashflow" disabled></td>`;
    document.getElementById('Egresos').innerHTML+=`<td id="delete2"><input type='text' id="totalcostinpucashflow" disabled></td>`;
    document.getElementById('Total').innerHTML+=`<td id= "delete3"><input type='text' id="totaltotalinputcashflow" disabled></td>`;
})


document.getElementById('addmonthbutton').addEventListener('click', ()=> {
    document.getElementById('totalcolumncashflow').remove();
    document.getElementById('delete1').remove();
    document.getElementById('delete2').remove();
    document.getElementById('delete3').remove();
    num+=1;
    if(months2.length===0){
        months2=months;
        renderTablesBudget.cashflowcolumns(months2[0],num);
        
        months2=months2.slice(1);
    }else {
        renderTablesBudget.cashflowcolumns(months2[0],num);
        
        months2=months2.slice(1);
    }
    
    if (rowsinEarnings >0) {
        document.getElementById("Totalearningscolumnhead").remove();
        for(let i=1; i<=rowsinEarnings; i++) {
            document.getElementById(`totalearningperconcept${i}`).remove();
            document.getElementById(`deleteearningrowcont${i}`).remove();
            document.getElementById(`rowearnings${i}`).insertAdjacentHTML("beforeend",`<td id="buttoncontainerearning${i}${num}"><input type ="text" id="directcosttotaldirectcost${i}${num}" placeholder= "Total del mes" disabled></td><td id="totalearningperconcept${i}"><input type="text" id="totalearningperconceptinput${i}${num}" disabled></td><td id="deleteearningrowcont${i}"><button type="button" class="btn btn-danger" id="deleteearningrow${i}">Delete</button><button type="button" id ="readybuttonearning${i}" class = "btn btn-success" > Ready </button></td>`);

        }
        document.getElementById("earningstotalearnings").insertAdjacentHTML("beforeend",`<td><input type="text" id = "totalmonthearning${num}" disabled></td>`);
        document.getElementById('earningsthead').insertAdjacentHTML("beforeend",`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`);
    }

    if (rowsinDirectcost > 0) {
        document.getElementById("Totaldirectcostcolumnhead").remove();
        for(let i=1; i<=rowsinDirectcost; i++) {
            document.getElementById(`totaldirectcostperconcept${i}`).remove();
            document.getElementById(`deletedirectcostrowcont${i}`).remove();
            document.getElementById(`rowdirectcost${i}`).insertAdjacentHTML('beforeend',`<td id="buttoncontainerdirectcost${i}${num}"><input type ="text" id="directcosttotaldirectcost${i}${num}" placeholder= "Total del mes" disabled></td><td id="totaldirectcostperconcept${i}"><input type="text" id="totaldirectcostperconceptinput${i}${num}" disabled></td><td id="deletedirectcostrowcont${i}"><button type="button" class="btn btn-danger" id="deletedirectcostrow${i}">Delete</button><button type="button" id ="readybuttondirectcost${i}" class = "btn btn-success" > Ready </button></td>`);
            renderTablesBudget.createbuttons(`buttoncontainerdirectcost${i}${num}`);
            renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontainerdirectcost${i}${num}`,`directcosttotaldirectcost${i}${num}`);
            renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontainerdirectcost${i}${num}`,num);

        }
        document.getElementById("directcosttotaldirectcost").insertAdjacentHTML('beforeend',`<td><input type="text" id = "totalmonthdirectcost${num}" disabled></td>`);
        document.getElementById('directcosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaldirectcostcolumnhead" >TOTAL</th>`);
    }

    if (rowsinAdmincost > 0) {
        document.getElementById("Totaladmincostcolumnhead").remove();
        for(let i=1; i<=rowsinAdmincost; i++) {
            document.getElementById(`totaladmincostperconcept${i}`).remove();
            document.getElementById(`deleteadmincostrowcont${i}`).remove();
            document.getElementById(`rowadmincost${i}`).insertAdjacentHTML('beforeend',`<td id="buttoncontaineradmincost${i}${num}"><input type ="text" id="admincosttotaladmincost${i}${num}" placeholder= "Total del mes" disabled></td><td id="totaladmincostperconcept${i}"><input type="text" id="totaladmincostperconceptinput${i}${num}" disabled></td><td id="deleteadmincostrowcont${i}"><button type="button" class="btn btn-danger" id="deleteadmincostrow${i}">Delete</button><button type="button" id ="readybuttonadmincost${i}" class = "btn btn-success" > Ready </button></td>`);
            renderTablesBudget.createbuttons(`buttoncontaineradmincost${i}${num}`);
            renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontaineradmincost${i}${num}`,`admincosttotaladmincost${i}${num}`);
            renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontaineradmincost${i}${num}`,num);

        }
        document.getElementById("admincosttotaladmincost").insertAdjacentHTML('beforeend',`<td><input type="text" id = "totalmonthadmincost${num}" disabled></td>`);
        document.getElementById('admincosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaladmincostcolumnhead" >TOTAL</th>`);
    }

    if (rowsinresources > 0) {
        document.getElementById('Totalresourcecolumnhead').remove();
        for(let i=1; i<=rowsinresources; i++) {
            document.getElementById(`totalresourceperconcept${i}`).remove();
            document.getElementById(`deleteresourcerowcont${i}`).remove();
            document.getElementById(`rowresource${i}`).insertAdjacentHTML('beforeend',`<td id="buttoncontainerresource${i}${num}"><input type ="text" id="resourcecosttotalinput${i}${num}" placeholder= "Costo"><input type ="text" id="resourcepercentinput${i}${num}" placeholder= "%"></td><td id="totalresourceperconcept${i}"><input type="text" id="totalresourceperconceptinput${i}" disabled></td><td id="deleteresourcerowcont${i}"><button type="button" class="btn btn-danger" id="deleteresourcerow${i}">Delete</button><button type="button" id ="readybuttonresource${i}" class = "btn btn-success" > Ready </button></td>`);
            
        }
        document.getElementById('resourcesthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totalresourcecolumnhead" >TOTAL</th>`);
    
    }

    document.getElementById('cashflowrowthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="totalcolumncashflow" >Total</th>`);
    document.getElementById('Ingresos').insertAdjacentHTML('beforeend',`<td id="delete1"><input type='text' id="totalearningsinputcashflow" disabled></td>`);
    document.getElementById('Egresos').insertAdjacentHTML('beforeend',`<td id="delete2"><input type='text' id="totalcostinpucashflow" disabled></td>`);
    document.getElementById('Total').insertAdjacentHTML('beforeend',`<td id= "delete3"><input type='text' id="totaltotalinputcashflow" disabled></td>`);
})


document.getElementById('buttonearningsadd').addEventListener('click', ()=> {
    document.getElementById("earningstotalearnings").remove();
    rowsinEarnings+=1;
    document.getElementById('earningstbody').insertAdjacentHTML('beforeend',`<tr id= "rowearnings${rowsinEarnings}"></tr>`);
    document.getElementById(`rowearnings${rowsinEarnings}`).insertAdjacentHTML('beforeend',`<td><input type ="text" id="earningconceptearnings${rowsinEarnings}" placeholder= "Concepto"></td>`);
    if(num < 2 && rowsinEarnings<=1) {
        document.getElementById(`rowearnings${rowsinEarnings}`).insertAdjacentHTML('beforeend',`<td id="buttoncontainerearning${rowsinEarnings}1"><input type ="text" id="earningtotalearning${rowsinEarnings}1" placeholder= "Total del mes"></td><td id="totalearningperconcept${rowsinEarnings}"><input type="text" id="totalearningperconceptinput${rowsinEarnings}1" disabled></td><td id="deleteearningrowcont${rowsinEarnings}"><button type="button" class="btn btn-danger" id="deleteearningrow${rowsinEarnings}">Delete</button><button type="button" id ="readybuttonearning${rowsinEarnings}" class = "btn btn-success" > Ready </button></td>`);
        document.getElementById('earningsthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`);
    }else{
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowearnings${rowsinEarnings}`).insertAdjacentHTML('beforeend',`<td id= "buttoncontainerearning${rowsinEarnings}${i}"><input type ="text" id="earningtotalearnings${rowsinEarnings}${i}" placeholder= "Total del mes"></td>`);
        }
        
        document.getElementById(`rowearnings${rowsinEarnings}`).insertAdjacentHTML('beforeend', `<td id="totalearningperconcept${rowsinEarnings}"><input type="text" id="totalearningperconceptinput${rowsinEarnings}1" disabled></td><td id="deleteearningrowcont${rowsinEarnings}"><button type="button" class="btn btn-danger" id="deleteearningrow${rowsinEarnings}">Delete</button><button type="button" id ="readybuttonearning${rowsinEarnings}" class = "btn btn-success" > Ready </button></td>`)
        if(rowsinEarnings === 1) {
            document.getElementById('earningsthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`);
        }
        
    }
    
    document.getElementById("earningstbody").insertAdjacentHTML('beforeend',`<tr id="earningstotalearnings">
    <td>TOTAL</td>
    </tr>`);
    for (let index = 1; index <= num; index++) {
        document.getElementById("earningstotalearnings").insertAdjacentHTML('beforeend',`<td><input type="text" id = "totalmonthearning${index}" disabled ></td>`);
    };
})

document.getElementById('buttondirectcostadd').addEventListener('click', ()=> {
    document.getElementById("directcosttotaldirectcost").remove();
    rowsinDirectcost+=1;
    document.getElementById('directcosttbody').insertAdjacentHTML('beforeend',`<tr id= "rowdirectcost${rowsinDirectcost}"></tr>`);
    document.getElementById(`rowdirectcost${rowsinDirectcost}`).insertAdjacentHTML("beforeend",`<td><input type ="text" id="costconceptdirectcost${rowsinDirectcost}" placeholder= "Concepto"></td>`);

    if(num<2 && rowsinDirectcost<=1) {

        document.getElementById(`rowdirectcost${rowsinDirectcost}`).insertAdjacentHTML("beforeend",`<td id="buttoncontainerdirectcost${rowsinDirectcost}1"><input type ="text" id="directcosttotaldirectcost${rowsinDirectcost}1" placeholder= "Total del mes" disabled></td><td id="totaldirectcostperconcept${rowsinDirectcost}"><input type="text" id="totaldirectcostperconceptinput${rowsinDirectcost}1" disabled></td><td id="deletedirectcostrowcont${rowsinDirectcost}"><button type="button" class="btn btn-danger" id="deletedirectcostrow${rowsinDirectcost}">Delete</button><button type="button" id ="readybuttondirectcost${rowsinDirectcost}" class = "btn btn-success" > Ready </button></td>`);
        document.getElementById('directcosthead').insertAdjacentHTML("beforeend",`<th scope="col" class="column" id="Totaldirectcostcolumnhead" >TOTAL</th>`);
        renderTablesBudget.createbuttons(`buttoncontainerdirectcost${rowsinDirectcost}1`);
        renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontainerdirectcost${rowsinDirectcost}1`,`directcosttotaldirectcost${rowsinDirectcost}1`);
        renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontainerdirectcost${rowsinDirectcost}1`,num);
        document.getElementById('earningsthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`);

    }else{
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowdirectcost${rowsinDirectcost}`).insertAdjacentHTML("beforeend",`<td id="buttoncontainerdirectcost${rowsinDirectcost}${i}"><input type ="text" id="directcosttotaldirectcost${rowsinDirectcost}${i}" placeholder= "Total del mes" disabled></td>`);
            renderTablesBudget.createbuttons(`buttoncontainerdirectcost${rowsinDirectcost}${i}`);
            renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontainerdirectcost${rowsinDirectcost}1`,`directcosttotaldirectcost${rowsinDirectcost}1`);
            renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontainerdirectcost${rowsinDirectcost}${i}`,num);
        }
        document.getElementById(`rowdirectcost${rowsinDirectcost}`).insertAdjacentHTML("beforeend",`<td id="totaldirectcostperconcept${rowsinDirectcost}"><input type="text" id="totaldirectcostperconceptinput${rowsinDirectcost}" disabled></td><td id="deletedirectcostrowcont${rowsinDirectcost}"><button type="button" class="btn btn-danger" id="deletedirectcostrow${rowsinDirectcost}">Delete</button><button type="button" id ="readybuttondirectcost${rowsinDirectcost}" class = "btn btn-success" >Ready</button></td>`);
        if( rowsinDirectcost === 1) {
            document.getElementById('directcosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaldirectcostcolumnhead" >TOTAL</th>`);
        }
        }
    document.getElementById("directcosttbody").insertAdjacentHTML("beforeend",`<tr id="directcosttotaldirectcost">
    <td>TOTAL</td>
    </tr>`);
    for (let index = 1; index <= num; index++) {
        document.getElementById("directcosttotaldirectcost").insertAdjacentHTML("beforeend",`<td><input type="text" id = "totalmonthdirectcost${index}" disabled ></td>`);
        renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontainerdirectcost${rowsinDirectcost}${index}`,`directcosttotaldirectcost${rowsinDirectcost}${index}`);
        renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontainerdirectcost${rowsinDirectcost}${index}`,num);
    };

})

document.getElementById('buttonadmincostadd').addEventListener('click', ()=> {
    document.getElementById("admincosttotaladmincost").remove();
    rowsinAdmincost+=1;
    document.getElementById('admincostbody').insertAdjacentHTML('beforeend',`<tr id= "rowadmincost${rowsinAdmincost}"></tr>`);
    document.getElementById(`rowadmincost${rowsinAdmincost}`).insertAdjacentHTML("beforeend",`<td><input type ="text" id="costconceptadmincost${rowsinAdmincost}" placeholder= "Concepto"></td>`);

    if(num<2 && rowsinAdmincost<=1) {

        document.getElementById(`rowadmincost${rowsinAdmincost}`).insertAdjacentHTML("beforeend",`<td id="buttoncontaineradmincost${rowsinAdmincost}1"><input type ="text" id="admincosttotaladmincost${rowsinAdmincost}1" placeholder= "Total del mes" disabled></td><td id="totaladmincostperconcept${rowsinAdmincost}"><input type="text" id="totaladmincostperconceptinput${rowsinAdmincost}1" disabled></td><td id="deleteadmincostrowcont${rowsinAdmincost}"><button type="button" class="btn btn-danger" id="deletedirectcostrow${rowsinAdmincost}">Delete</button><button type="button" id ="readybuttonadmincost${rowsinAdmincost}" class = "btn btn-success" > Ready </button></td>`);
        renderTablesBudget.createbuttons(`buttoncontaineradmincost${rowsinAdmincost}1`);
        renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontaineradmincost${rowsinAdmincost}1`,`admincosttotaladmincost${rowsinAdmincost}1`);
        renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontaineradmincost${rowsinAdmincost}1`,num);
        document.getElementById('admincosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaladmincostcolumnhead" >TOTAL</th>`);

    }else{
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowadmincost${rowsinAdmincost}`).insertAdjacentHTML("beforeend",`<td id="buttoncontaineradmincost${rowsinAdmincost}${i}"><input type ="text" id="admincosttotaladmincost${rowsinAdmincost}${i}" placeholder= "Total del mes" disabled></td>`);
            renderTablesBudget.createbuttons(`buttoncontaineradmincost${rowsinAdmincost}${i}`);
            renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontaineradmincost${rowsinAdmincost}1`,`admincosttotaladmincost${rowsinAdmincost}1`);
            renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontaineradmincost${rowsinAdmincost}${i}`,num);
        }
        document.getElementById(`rowadmincost${rowsinAdmincost}`).insertAdjacentHTML("beforeend",`<td id="totaladmincostperconcept${rowsinAdmincost}"><input type="text" id="totaladmincostperconceptinput${rowsinAdmincost}" disabled></td><td id="deleteadmincostrowcont${rowsinAdmincost}"><button type="button" class="btn btn-danger" id="deletedirectcostrow${rowsinAdmincost}">Delete</button><button type="button" id ="readybuttonadmincost${rowsinAdmincost}" class = "btn btn-success" >Ready</button></td>`);
        if(rowsinAdmincost === 1) {
            document.getElementById('admincosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaladmincostcolumnhead" >TOTAL</th>`);
        }

    }
    document.getElementById("admincostbody").insertAdjacentHTML("beforeend",`<tr id="admincosttotaladmincost">
    <td>TOTAL</td>
    </tr>`);
    for (let index = 1; index <= num; index++) {
        document.getElementById("admincosttotaladmincost").insertAdjacentHTML("beforeend",`<td><input type="text" id = "totalmonthdirectcost${index}" disabled ></td>`);
        renderTablesBudget.buttonsabilitate(`butttonFreeeditbuttoncontaineradmincost${rowsinAdmincost}${index}`,`admincosttotaladmincost${rowsinAdmincost}${index}`);
        renderTablesBudget.buttonsumatories(`buttonSumatorybuttoncontaineradmincost${rowsinAdmincost}${index}`,num);
    };

})

document.getElementById("buttonresourceadd").addEventListener('click', ()=> {

    rowsinresources+=1;
    document.getElementById('resourcestbody').insertAdjacentHTML('beforeend',`<tr id= "rowresource${rowsinresources}"></tr>`);
    document.getElementById(`rowresource${rowsinresources}`).insertAdjacentHTML("beforeend",`<td><input type ="text" id="conceptresource${rowsinresources}" placeholder= "Concepto"></td>`);

    if(num < 2 && rowsinresources <= 1) {
        document.getElementById(`rowresource${rowsinresources}`).insertAdjacentHTML("beforeend",`<td id="buttoncontainerresource${rowsinresources}1"><input type ="text" id="resourcecosttotalinput${rowsinresources}1" placeholder= "Costo"><input type ="text" id="resourcepercentinput${rowsinresources}1" placeholder= "%"></td><td id="totalresourceperconcept${rowsinresources}"><input type="text" id="totalresourceperconceptinput${rowsinresources}" disabled></td><td id="deleteresourcerowcont${rowsinresources}"><button type="button" class="btn btn-danger" id="deleteresourcerow${rowsinresources}">Delete</button><button type="button" id ="readybuttonresource${rowsinresources}" class = "btn btn-success" > Ready </button></td>`);
        document.getElementById('resourcesthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totalresourcecolumnhead" >TOTAL</th>`);
    }else {

        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowresource${rowsinresources}`).insertAdjacentHTML("beforeend",`<td id="buttoncontainerresource${rowsinresources}${i}"><input type ="text" id="resourcecosttotalinput${rowsinresources}${i}" placeholder= "Costo"><input type ="text" id="resourcepercentinput${rowsinresources}${i}" placeholder= "%"></td>`);
        }
        document.getElementById(`rowresource${rowsinresources}`).insertAdjacentHTML("beforeend",`<td id="totalresourceperconcept${rowsinresources}"><input type="text" id="totalresourceperconcept${rowsinresources}" disabled></td><td id="deleteresourcerowcont${rowsinresources}"><button type="button" class="btn btn-danger" id="deleteresourcerow${rowsinresources}">Delete</button><button type="button" id ="readybuttonresource${rowsinresources}" class = "btn btn-success" >Ready</button></td>`);
        if(rowsinresources === 1) {
            document.getElementById('admincosthead').insertAdjacentHTML('beforeend',`<th scope="col" class="column" id="Totaladmincostcolumnhead" >TOTAL</th>`);
        }

    }
})