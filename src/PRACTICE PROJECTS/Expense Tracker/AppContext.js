import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

const localBudgetArray = [
   
];

const ArrayContext = createContext()

function ArrayProvider({ children }) {
    const [expenseArray, setExpenseArray] = useState([])
    const [budgetArray, setBudgetArray] = useState(localBudgetArray)

    return (
        <ArrayContext.Provider value={{ budgetArray, setBudgetArray, expenseArray, setExpenseArray }}>{children}</ArrayContext.Provider>
    )
}
export { ArrayProvider, ArrayContext }
