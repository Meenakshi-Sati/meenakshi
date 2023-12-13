import { useState } from "react"

function CreateBudget() {
    const [budgetArray, setBudgetArray] = useState([])

    let newBudget;
    function handleBudgetInput(e, id) {
        newBudget={...newBudget,[id]:e.target.value}
       console.log(newBudget)
    }

    console.log(budgetArray)


    return (
        <div id="create-budget-main-div">
            <h1>Create Budget</h1>
            <label className="budget-label" htmlFor="">Budget Name</label>
            <input onChange={(e) => handleBudgetInput(e, "name")} className="budget-input" type="text" placeholder="e.g.,Groceries" />
            <label className="budget-label" htmlFor="">Budget Amount</label>
            <input onChange={(e) => handleBudgetInput(e, "amount")} className="budget-input" type="text" placeholder="e.g.,$350" />
            <button id="create-budget-btn">Create Budget</button>
        </div>
    )
}
export default CreateBudget