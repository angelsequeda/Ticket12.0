import { renderTablesBudget } from "./index.js";

let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let num = 0;
document.getElementById('monthselect').addEventListener('change',()=> {
    num+=1;
    document.getElementById("conceptcolumn").hidden = false;
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
})