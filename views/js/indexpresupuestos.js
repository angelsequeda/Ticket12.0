import { Budget } from "./classes.js";
import { Renderizer } from "./index.js";

let result = await Budget.searchAllBudgets();
console.log(result);
Renderizer.renderIndex(result);
Renderizer.activeButtonsIndex(result);
