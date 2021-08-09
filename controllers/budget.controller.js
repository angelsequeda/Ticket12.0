const { showBudgets, searchBudget, editBudget, addNewBudgetService } = require("../services/budget.service");

const showBudgetsinScreen = async (req,res) => {

    try {

        let result = await showBudgets();
        return res.status(200).json(result);

    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

const searchForBudget = async(req,res) => {
    try {

        let result =  await searchBudget(req.body.id_presupuesto);
        return res.status(200).json(result);

    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

const addNewBudget =  (req,res) => {
    
    try {
        addNewBudgetService(req.body);
        return res.status(200).json('Registro realizado con exito');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {showBudgetsinScreen,searchForBudget,addNewBudget}