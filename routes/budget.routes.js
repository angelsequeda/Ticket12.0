const { showBudgetsinScreen, searchForBudget } = require("../controllers/budget.controller");

const budgetRoutes = (app) => {

    app.get('/budgets/consult',showBudgetsinScreen);
    
    app.post('/budgets/consultone',searchForBudget);
}

module.exports = {budgetRoutes};