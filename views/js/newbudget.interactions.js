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
            document.getElementById(`totalearningsperconcept${i}`).remove();
            document.getElementById(`deleteearningrowcont${i}`).remove();
            document.getElementById(`rowearnings${i}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${i}${num}" placeholder= "Total del mes" ></td><td id="totalearningsperconcept${i}"><input type="text" id="totalearningperconceptinput${i}" disabled></td><td id="deleteearningrowcont${i}"><input type ="checkbox" id="deleteearningrow${i}"></td>`;

        }
        document.getElementById("earningstotalearnings").innerHTML+=`<td><input type="text" id = "totalmonthearning${num}" disabled></td>`;
        document.getElementById('earningsthead').innerHTML+=`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`;
    }

    if (rowsinDirectcost > 0) {
        document.getElementById("Totaldirectcostcolumnhead").remove();
        for(let i=1; i<=rowsinDirectcost; i++) {
            document.getElementById(`totaldirectcostperconcept${i}`).remove();
            document.getElementById(`deletedirectcostrowcont${i}`).remove();
            document.getElementById(`rowdirectcost${i}`).innerHTML+=`<td><input type ="text" id="directcosttotaldirectcost${i}${num}" placeholder= "Total del mes" ></td><td id="totaldirectcostperconcept${i}"><input type="text" id="totaldirectcostperconceptinput${i}" disabled></td><td id="deletedirectcostrowcont${i}"><input type ="checkbox" id="deletedirectcostrow${i}"></td>`;

        }
        document.getElementById("directcosttotaldirectcost").innerHTML+=`<td><input type="text" id = "totalmonthdirectcost${num}" disabled></td>`;
        document.getElementById('directcosthead').innerHTML+=`<th scope="col" class="column" id="Totaldirectcostcolumnhead" >TOTAL</th>`;
    }

    if (rowsinAdmincost > 0) {
        for(let i=1; i<=rowsinAdmincost; i++) {
            document.getElementById(`rowadmincost${i}`).innerHTML+=`<td><input type ="text" id="costtotaladmincost$${i}${num}" placeholder= "Total del mes"></td>`
        }
    }

    if (rowsinresources > 0) {
        for(let i=1; i<=rowsinresources; i++) {
            document.getElementById(`rowresource${i}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${i}${num}" placeholder= "%"><input type ="text" id="costresourceresources${i}${num}" placeholder= "Costo"></td>`;
        }
    
    }

    document.getElementById('cashflowrowthead').innerHTML+=`<th scope="col" class="column" id="totalcolumncashflow" >Total</th>`;
    document.getElementById('Ingresos').innerHTML+=`<td id="delete1"><input type='text' id="totalearningsinputcashflow" disabled></td>`;
    document.getElementById('Egresos').innerHTML+=`<td id="delete2"><input type='text' id="totalcostinpucashflow" disabled></td>`;
    document.getElementById('Total').innerHTML+=`<td id= "delete3"><input type='text' id="totaltotalinputcashflow" disabled></td>`;
})


document.getElementById('buttonearningsadd').addEventListener('click', ()=> {
    document.getElementById("earningstotalearnings").remove();
    rowsinEarnings+=1;
    document.getElementById('earningstbody').innerHTML+=`<tr id= "rowearnings${rowsinEarnings}"></tr>`;
    document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningconceptearnings${rowsinEarnings}" placeholder= "Concepto"></td>`;
    if(num<2 && rowsinEarnings<=1) {
        document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}1" placeholder= "Total del mes"></td><td id="totalearningsperconcept${rowsinEarnings}"><input type="text" id="totalearningperconceptinput${rowsinEarnings}" disabled></td><td id= "deleteearningrowcont${rowsinEarnings}"><input type ="checkbox" id="deleteearningrow1"></td>`;
        document.getElementById('earningsthead').innerHTML+=`<th scope="col" class="column" id="Totalearningscolumnhead" >TOTAL</th>`
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}${i}" placeholder= "Total del mes"></td></td>`;
        }
        document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td id="totalearningsperconcept${rowsinEarnings}"><input type="text" id="totalearningperconceptinput${rowsinEarnings}" disabled></td><td id="deleteearningrowcont${rowsinEarnings}"><input type ="checkbox" id="deleteearningrow${rowsinEarnings}"></td>`;
    }
    document.getElementById("earningstbody").innerHTML+=`<tr id="earningstotalearnings">
    <td>TOTAL</td>
    </tr>`;
    for (let index = 1; index <= num; index++) {
        document.getElementById("earningstotalearnings").innerHTML+=`<td><input type="text" id = "totalmonthearning${index}" disabled ></td>`;
    };
    
})

document.getElementById('buttondirectcostadd').addEventListener('click', ()=> {
    document.getElementById("directcosttotaldirectcost").remove();
    rowsinDirectcost+=1;
    document.getElementById('directcosttbody').innerHTML+=`<tr id= "rowdirectcost${rowsinDirectcost}"></tr>`;
    document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costconceptdirectcost${rowsinDirectcost}" placeholder= "Concepto"></td>`;

    if(num<2 && rowsinDirectcost<=1) {

        document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costtotaldirectcost${rowsinDirectcost}1" placeholder= "Total del mes"></td><td id="totaldirectcostperconcept${rowsinDirectcost}"><input type="text" id="totaldirectcostperconceptinput${rowsinDirectcost}" disabled></td><td id= "deletedirectcostrowcont${rowsinDirectcost}"><input type ="checkbox" id="deletedirectcostrow1"></td>`;
        document.getElementById('directcosthead').innerHTML+=`<th scope="col" class="column" id="Totaldirectcostcolumnhead" >TOTAL</th>`

    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costtotaldirectcost${rowsinDirectcost}${i}" placeholder= "Total del mes"></td>`;
        }
        document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td id="totaldirectcostperconcept${rowsinDirectcost}"><input type="text" id="totaldirectcostperconceptinput${rowsinDirectcost}" disabled></td><td id="deletedirectcostrowcont${rowsinDirectcost}"><input type ="checkbox" id="deletedirectcostrow${rowsinDirectcost}"></td>`;
    }
    document.getElementById("directcosttbody").innerHTML+=`<tr id="directcosttotaldirectcost">
    <td>TOTAL</td>
    </tr>`;
    for (let index = 1; index <= num; index++) {
        document.getElementById("directcosttotaldirectcost").innerHTML+=`<td><input type="text" id = "totalmonthdirectcost${index}" disabled ></td>`;
    };
})

document.getElementById('buttonadmincostadd').addEventListener('click', ()=> {
    document.getElementById("admincosttotaladmincost").remove();
    rowsinAdmincost+=1;
    document.getElementById('admincosttbody').innerHTML+=`<tr id= "rowadmincost${rowsinAdmincost}"></tr>`;
    document.getElementById(`rowadmincost${rowsinAdmincost}`).innerHTML+=`<td><input type ="text" id="costconceptadmincost${rowsinAdmincost}" placeholder= "Concepto"></td>`;
    if(num<2) {
        document.getElementById(`rowadmincost${rowsinAdmincost}`).innerHTML+=`<td><input type ="text" id="costtotaladmincost${rowsinAdmincost}1" placeholder= "Total del mes"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowadmincost${rowsinAdmincost}`).innerHTML+=`<td><input type ="text" id="costtotaladmincost${rowsinAdmincost}${i}" placeholder= "Total del mes"></td>`;
        }
    }
    document.getElementById('admincosttbody').innerHTML = `<td id="admincosttotaladmincost" >TOTAL <input type="text" id="admincosttotalinput" disabled></td>`;
})

document.getElementById('buttonresourceadd').addEventListener('click', ()=> {
    rowsinresources+=1;
    document.getElementById('resourcestbody').innerHTML+=`<tr id= "rowresource${rowsinresources}"></tr>`;
    document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="costconceptadmincost${rowsinresources}" placeholder= "Concepto"></td>`;
    if(num<2) {
        document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${rowsinresources}1" placeholder= "%"><input type ="text" id="costresourceresources${rowsinresources}1" placeholder= "Costo"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${rowsinresources}${i}" placeholder= "%"><input type ="text" id="costresourceresources${rowsinresources}${i}" placeholder= "Costo"></td>`;
        }
    }
})