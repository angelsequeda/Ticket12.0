const {budgetModel} = require('../models/budget.model');



const showBudgets = async ()=> {

    try {
        let result =  await budgetModel.findAll({attributes:['id_presupuesto','proyecto','creado_en','version'],where: {activo:1}});
        return result;
    } catch (error) {
        console.log(error.message);
        throw new Error('Error con presupuestos [SERVICE]')
    }
}

const searchBudget = async(data) => {

    try {
        let result = await budgetModel.findAll({attributes:['id_presupuesto','creado_en','proyecto','version'],
            where: {
                id_presupuesto : data,
                activo: 1
            }
        });
        return result[0];
    } catch (error) {
        console.log(error.message);
        throw new Error('Error con presupuesto [SERVICE]')
    }
}


const deleteBudget = async(data) => {
    try {
        let result = await budgetModel.update({activo:0},{where: {id_presupuesto:data}});
    } catch (error) {
        console.log(error.message);
        throw new Error('Error al eliminar [SERVICE]');
    }
}


const addNewBudget = async(data) => {

    let budget = data.budget;
    let earnings = data.earnings;
    let directcost = data.directcost;
    let admincost = data.admincost;
    let resources = data.resources;

    data.earnings.foreach(async (element) => {
        earningModel.create()
    })

}
module.exports = {showBudgets,searchBudget,deleteBudget};