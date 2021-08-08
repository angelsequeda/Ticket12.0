let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let months2 = [];
let months3 = [];
let num = 0;
let rowsinEarnings = 0;
let rowsinDirectcost = 0;
let rowsinAdmincost = 0;
let rowsinresources = 0;

import { functionsButtons} from "./index.js"


document.getElementById('monthselect').addEventListener('change',()=> {

    for (let i = 1; i <= 8; i++) {
        document.getElementById(`table${i}head`).hidden = false;
        document.getElementById(`table${i}body`).hidden = false;
        
        if( i===1 ) {
            document.getElementById(`addcolumntable1`).hidden = false;
        } else if(i<=5){
            document.getElementById(`addrowtable${i}`).hidden = false;
    }
    }
    
    num+= 1
    functionsButtons.addmonthcolumn(document.getElementById("monthselect").value,num)
    document.getElementById("monthselect").disabled = true;
    months3.push(document.getElementById('monthselect').value);
    


    
    let index = months.findIndex((element) => {
        return element === document.getElementById('monthselect').value;
    });
    months2 = months.slice(index+1);


})

document.getElementById(`addcolumntable1`).addEventListener('click', ()=> {

    num+=1;
    

    if(months2.length===0){

        months2=months;
        months2=months2.slice(1);
        functionsButtons.addmonthcolumn(months2[0],num);

    }else {
        functionsButtons.addmonthcolumn(months2[0],num);
        
        months2=months2.slice(1);
    }
})

document.getElementById("addrowtable2").addEventListener('click', ()=> {

    rowsinEarnings += 1;
    functionsButtons.addrowearnings(rowsinEarnings,num);

})