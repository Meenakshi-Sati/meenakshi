import "./ExpenseTracker.css"
import { useEffect, useState } from "react"
import Expense from "./Expense"
import BudgetItem from "./BudgetItem"
import { ToastContainer, toast } from "react-toastify"
import { useContext } from "react"
import { ArrayContext } from "./AppContext"
import { Link } from "react-router-dom"

function CreateBudget() {
    const { budgetArray, setBudgetArray, expenseArray, setExpenseArray } = useContext(ArrayContext);
    const [inputValue, setInputValue] = useState({ name: "", amount: "" })

    useEffect(() => {
        let saveUser = localStorage.getItem("Username")
        if (saveUser) {
        }

        let saveBudget = localStorage.getItem("Budget")
        if (saveBudget) {
            let Budget = JSON.parse(saveBudget)
            setBudgetArray(Budget)
        }

        let saveExpense = localStorage.getItem("Expense")
        if (saveExpense) {
            let Expense = JSON.parse(saveExpense)
            setExpenseArray(Expense)
        }

    }, [])


    function handleBudgetInput(e, id) {
        let budgetName = budgetArray.findIndex(obj => obj.name === e.target.value)
        if (budgetName !== -1) {
            alert(`Budget for ${budgetArray[budgetName].name} has already created`)
            setInputValue({ name: "", amount: "" })
        }
        else {
            setInputValue({ ...inputValue, [id]: e.target.value })
        }
    }
    console.log(budgetArray)

    function saveBudget() {
        let updatedBudgetArray = [...budgetArray]
        updatedBudgetArray = [...updatedBudgetArray, inputValue]
        localStorage.setItem("Budget", JSON.stringify(updatedBudgetArray))
        setBudgetArray(updatedBudgetArray)
        setInputValue({ name: "", amount: "" })
    }

    function logoutTheUser() {
        localStorage.removeItem("Username");
        localStorage.removeItem("Budget");
        localStorage.removeItem("Expense");
        toast.info("User has been logged out")

    }

    return (
        <div>
            <div id="create-budget-main-div">
                <div id="dashboard-top-pannel">
                    <div id="dash-left-top">
                        <img id="home-img" src="https://cdn-icons-png.flaticon.com/512/9799/9799161.png" alt="" />
                        <h1 id="home-h">Home Budget</h1>
                    </div>
                    <button id="logout-btn" onClick={logoutTheUser}>LogOut</button>
                </div>
                <div id="create-budget-content">
                    <h1 id="create-budget-h">Create Budget</h1>
                    <label className="budget-label" htmlFor="">Budget Name</label>
                    <input value={inputValue.name} onChange={(e) => handleBudgetInput(e, "name")} className="budget-input" type="text" placeholder="e.g.,Groceries" />
                    <label className="budget-label" htmlFor="">Budget Amount</label>
                    <input value={inputValue.amount} onChange={(e) => handleBudgetInput(e, "amount")} className="budget-input" type="text" placeholder="e.g.,$350" />
                    <button onClick={saveBudget} id="create-budget-btn">Create Budget</button>
                </div>
            </div>
            <h1 id="ex-budget-h">Existing Budgets</h1>
            <div id="createBudget-main-div">
                {budgetArray.map((obj, idx) => {
                    return <BudgetItem id={idx} budgetArray={budgetArray} setBudgetArray={setBudgetArray} expenseArray={expenseArray} budgetObj={obj} />
                })}
            </div>
            <Expense budgetArray={budgetArray} expenseArray={expenseArray} setExpenseArray={setExpenseArray} />
        </div>
    )
}
export default CreateBudget
