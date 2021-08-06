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

    
    let index = months.findIndex((element) => {
        return element === document.getElementById('monthselect').value;
    });
    months2 = months.slice(index+1);
    console.log(months2);
    renderTablesBudget.cashflowrows();
    renderTablesBudget.cashflowcolumns(document.getElementById('monthselect').value,num);

    document.getElementById('monthselect').disabled = true;
})


document.getElementById('addmonthbutton').addEventListener('click', ()=> {
    num+=1;
    if(months2.length===0){
        months2=months;
        renderTablesBudget.cashflowcolumns(months2[0],num);
        
        months2=months2.slice(1);
    }else {
        renderTablesBudget.cashflowcolumns(months2[0],num);
        
        months2=months2.slice(1);
    }

    if (rowsinEarnings > 0) {
        for(let i=1; i<=rowsinEarnings; i++) {
            document.getElementById(`rowearnings${i}`).innerHTML+=`<td><input type ="text" id="earninttotalearnings${rowsinEarnings}${i}" placeholder= "Total del mes" ></td>`
        }
    }

    if (rowsinDirectcost > 0) {
        for(let i=1; i<=rowsinDirectcost; i++) {
            document.getElementById(`rowdirectcost${i}`).innerHTML+=`<td><input type ="text" id="costtotaldirectcost${rowsinEarnings}${i}" placeholder= "Total del mes"></td>`
        }
    }

    if (rowsinAdmincost > 0) {
        for(let i=1; i<=rowsinAdmincost; i++) {
            document.getElementById(`rowadmincost${i}`).innerHTML+=`<td><input type ="text" id="costtotaladmincost${rowsinAdmincost}${i}" placeholder= "Total del mes"></td>`
        }
    }

    if (rowsinresources > 0) {
        for(let i=1; i<=rowsinresources; i++) {
            document.getElementById(`rowresource${i}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${rowsinresources}1" placeholder= "%"><input type ="text" id="costresourceresources${rowsinresources}1" placeholder= "Costo"></td>`
        }
    }
})


document.getElementById('buttonearningsadd').addEventListener('click', ()=> {
    rowsinEarnings+=1;
    document.getElementById('earningstbody').innerHTML+=`<tr id= "rowearnings${rowsinEarnings}"></tr>`;
    document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningconceptearnings${rowsinEarnings}" placeholder= "Concepto"></td>`;
    if(num<2) {
        document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}1" placeholder= "Total del mes"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}${i}" placeholder= "Total del mes"></td>`;
        }
    }
})

document.getElementById('buttondirectcostadd').addEventListener('click', ()=> {
    rowsinDirectcost+=1;
    document.getElementById('directcosttbody').innerHTML+=`<tr id= "rowdirectcost${rowsinDirectcost}"></tr>`;
    document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costconceptdirectcost${rowsinDirectcost}" placeholder= "Concepto"></td>`;
    if(num<2) {
        document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costtotaldirectcost${rowsinDirectcost}1" placeholder= "Total del mes"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowdirectcost${rowsinDirectcost}`).innerHTML+=`<td><input type ="text" id="costtotaldirectcost${rowsinDirectcost}${i}" placeholder= "Total del mes"></td>`;
        }
    }
})

document.getElementById('buttonadmincostadd').addEventListener('click', ()=> {
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
})

document.getElementById('buttonresourceadd').addEventListener('click', ()=> {
    rowsinresources+=1;
    document.getElementById('resourcestbody').innerHTML+=`<tr id= "rowresource${rowsinresources}"></tr>`;
    document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="costconceptadmincost${rowsinresources}" placeholder= "Concepto"></td>`;
    if(num<2) {
        document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${rowsinresources}1" placeholder= "%"><input type ="text" id="costresourceresources${rowsinresources}1" placeholder= "Costo"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowresource${rowsinresources}`).innerHTML+=`<td><input type ="text" id="percentresourceresources${rowsinresources}1" placeholder= "%"><input type ="text" id="costresourceresources${rowsinresources}1" placeholder= "Costo"></td>`;
        }
    }
})