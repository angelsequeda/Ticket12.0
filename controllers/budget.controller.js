const { showBudgets, searchBudget, editBudget } = require("../services/budget.service");

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



module.exports = {showBudgetsinScreen,searchForBudget}