const { Sequelize } = require("sequelize");
const sequelize = require("../db/connection");

const {budgetModel} = require('../models/budget.model');
const earningModel = require('../models/earnings.model');

let date = require('moment');
const directCostmodel = require("../models/directcost.model");
const admCostmodel = require("../models/admcost.model");
const resourcesModel = require("../models/resources.model");

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
        await budgetModel.update({activo:0},{where: {id_presupuesto:data}}).then(()=> {
            earningModel.destroy({where: {id_presupuesto : data}}).then(()=> {
                directCostmodel.destroy({where: {id_presupuesto : data}}).then(()=> {
                    admCostmodel.destroy({where: {id_presupuesto : data}}).then(()=> {
                        resourcesModel.destroy({where: {id_presupuesto : data}});
                    })
                })
            })
        })
    } catch (error) {
        console.log(error.message);
        throw new Error('Error al eliminar [SERVICE]');
    }
}



const addNewBudgetService = async(data) => {

    try{
        let today = date().toDate();
        await budgetModel.create({id_presupuesto:data.budget.id_presupuesto, proyecto:data.budget.proyecto,creado_en:today,version: 1, activo: 1 })
        if( data.earnings && data.earnings.length > 0 ) {
            
            data.earnings.forEach( async(element) => {
                await earningModel.create(element);
            })
        };

        if(data.directcost && data.directcost.length > 0) {
            data.directcost.forEach( async(element) => {
                await directCostmodel.create(element);
            })
        };

        if(data.admincost && data.admincost.length > 0) {
            data.admincost.forEach( async(element) => {
                await admCostmodel.create(element);
            })
        };

        if(data.resources && data.resources.length > 0) {
            data.resources.forEach( async(element) => {
                await resourcesModel.create(element);
            })
        };
    }catch(error){
        throw new Error('Ha habido un error de registro');
    }

}
module.exports = {showBudgets,searchBudget,deleteBudget,addNewBudgetService,deleteBudget};