const { showBudgetsinScreen, searchForBudget, addNewBudget, eraseBudget } = require("../controllers/budget.controller");

const budgetRoutes = (app) => {

    app.get('/budgets/consult',showBudgetsinScreen);
    
    app.post('/budgets/consultone',searchForBudget);

    app.post("/budgets/addnew",addNewBudget);

    app.post("/budgets/delete",eraseBudget)
}

module.exports = {budgetRoutes};