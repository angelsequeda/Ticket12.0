import { renderTablesBudget } from "./index.js";

let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let num = 0;
let rowsinEarnings = 0;

document.getElementById('monthselect').addEventListener('change',()=> {
    num+=1;
    
    document.getElementById("conceptcolumn").hidden = false;
    document.getElementById("conceptcolumnearnings").hidden = false;
    document.getElementById("buttonearningsadd").hidden = false;
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
            document.getElementById(`rowearnings${i}`).innerHTML+=`<td><input type ="text" id="earninttotalearnings${rowsinEarnings}${i}"></td>`
        }
    }
})


document.getElementById('buttonearningsadd').addEventListener('click', ()=> {
    rowsinEarnings+=1;
    document.getElementById('earningstbody').innerHTML+=`<tr id= "rowearnings${rowsinEarnings}"></tr>`;
    document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningconceptearnings${rowsinEarnings}"></td>`;
    if(num<2) {
        document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}1"></td>`;
    }else {
        for (let i=1 ;i<=num; i++) {
            document.getElementById(`rowearnings${rowsinEarnings}`).innerHTML+=`<td><input type ="text" id="earningtotalearnings${rowsinEarnings}${i}"></td>`;
        }
    }
})