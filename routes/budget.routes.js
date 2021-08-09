const { showBudgetsinScreen, searchForBudget, addNewBudget } = require("../controllers/budget.controller");

const budgetRoutes = (app) => {

    app.get('/budgets/consult',showBudgetsinScreen);
    
    app.post('/budgets/consultone',searchForBudget);

    app.post("/budgets/addnew",addNewBudget);
}

module.exports = {budgetRoutes};