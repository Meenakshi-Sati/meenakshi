import { useState, useEffect } from "react"
import ExpensesList from "./ExpensesList"
import "./ExpenseTracker.css"

function Expense({ budgetArray, expenseArray, setExpenseArray }) {
    const [inputValue, setInputValue] = useState({ name: "", amount: "" })

    function selectCategory(e) {
        let selectedCategory = e.target.value
        setInputValue({ ...inputValue, category: selectedCategory });
    }


    function handleExpenseInput(e, id) {
        setInputValue({ ...inputValue, id: Date.now(), [id]: e.target.value, date: new Date() })
    }

    function saveExpense() {
        let updatedExpenseArray = [...expenseArray]
        updatedExpenseArray = [...updatedExpenseArray, inputValue]
        localStorage.setItem("Expense", JSON.stringify(updatedExpenseArray))
        setExpenseArray(updatedExpenseArray)
        setInputValue({ name: "", amount: "" })
    }

    function deleteExpense(id) {
        let updatedArray = expenseArray.filter(obj => obj.id !== id)
        localStorage.removeItem("Expense")
        localStorage.setItem("Expense",JSON.stringify(updatedArray))
        setExpenseArray(updatedArray)
    }

    return (
        <div id="expense-main-div">
            <div id="create-expense-main-div">
                <h1 id="add-expense-h">Add New Expense</h1>
                <label className="expense-label" htmlFor="">Expense Name</label>
                <input value={inputValue.name} onChange={(e) => handleExpenseInput(e, "name")} className="expense-input" type="text" placeholder="e.g.,Shpping" />
                <label className="expense-label" htmlFor="">Expense Amount</label>
                <input value={inputValue.amount} onChange={(e) => handleExpenseInput(e, "amount")} className="expense-input" type="text" placeholder="e.g.,$900" />
                <select value="Select Category" onChange={selectCategory} name="" id="expense-select">
                    <option disabled >Select Category</option>
                    {budgetArray.map(budget => {
                        return <option className="category" value={budget.name}>{budget.name}</option>
                    })}
                </select>
                <button onClick={saveExpense} id="add-expense-btn">Add Expense</button>
            </div>
            <div id="expense-list-main-div">
                <h1 id="recent-ex-h">Recent Expenses</h1>
                <table>
                    <thead>
                        <tr className="table-tr-head">
                            <th className="table-head-h name-hh">Name</th>
                            <th className="table-head-h">Amount</th>
                            <th className="table-head-h">Date</th>
                            <th><img src="" alt="" /></th>
                        </tr>
                    </thead>
                    <tbody>
                            { expenseArray.map((obj, idx) => {
                                    return <ExpensesList deleteExpense={deleteExpense} id={idx} expenseObj={obj} />
                                })
                            }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
export default Expense