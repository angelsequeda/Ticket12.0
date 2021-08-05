import { Budget } from "./classes.js";
import { Renderizer } from "./index.js";

let result = await Budget.searchAllBudgets();
Renderizer.renderIndex(result);