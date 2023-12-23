import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ArrayContext } from "./AppContext"
import FormatDate from "./FormatDate"
import FormatPrice from "./FormatPrice"
import "./ExpenseTracker.css"
import { Link } from "react-router-dom"

function BudgetOverview() {
    const { budgetArray, setBudgetArray, expenseArray, setExpenseArray } = useContext(ArrayContext);
    const [currentBudget, setCurrentBudget] = useState({})
    const [budgetAmount, setBudgetAmount] = useState()
    const [name, setName] = useState("")
    const [totalSpentAmt, setTotalSpentAmt] = useState(0)
    const [expenseAmount, setExpenseAmount] = useState(0)
    const [remainingAmount, setRemainingAmount] = useState()
    const [expArray, setExpArray] = useState([])
    const { id } = useParams()

    useEffect(() => {
        let currentObj = budgetArray[id]
        setName(currentObj?.name)
        setBudgetAmount(currentObj?.amount)
        setCurrentBudget(currentObj)
        let exArray = expenseArray.filter(obj => {
            if (obj.category === currentObj.name) {
                return obj
            }
        })
        if (exArray !== undefined) {
            let totalSpentAmount = exArray.reduce((ac, item) => ac + Number(item.amount), 0)
            setTotalSpentAmt(totalSpentAmount)
            let remaining = currentObj.amount - totalSpentAmount
            setRemainingAmount(remaining)
            setExpArray(exArray)
        }
    }, [expenseAmount])
    console.log(remainingAmount)

    function deleteBudget(name) {
        let updatedBudgetArray = budgetArray.filter(obj => obj.name !== name)
        localStorage.removeItem("Budget")
        localStorage.setItem("Budget", JSON.stringify(updatedBudgetArray))
        setBudgetArray(updatedBudgetArray)
    }

    return (
        <div>
            <h1 id="over-main-h">{name} Budget Overview</h1>
            <h1 id="b-main-h">Budget Details</h1>
            <h1 id="e-main-h">Expense Details</h1>
            <div id="overview-main-div">
                <div className="over-budget-div">
                    <div id={id} className=" over-bt">
                        <div id="over-head">
                            <h5 className="over-hh">Name</h5>
                            <h5 className="over-hh">Budget</h5>
                            <h5 className="over-hh"> Spent</h5>
                            <h5 className="over-hh">Remaing</h5>
                        </div>
                        <h6 className="budget-name over-name">{currentBudget.name}</h6>
                        <h6 className="budget-amount over-amt">{<FormatPrice amount={Number(budgetAmount)} />}</h6>
                        <div className="spent-remain-div">
                            <div className="spent-div">
                                <h6 className="spent-amount over-s">{<FormatPrice amount={Number(totalSpentAmt)} />}</h6>

                            </div>
                            <div className="remaining-div">
                                <h6 className="remaining-amount over-r">{<FormatPrice amount={Number(remainingAmount)} />}</h6>

                            </div>
                        </div>
                    </div>
                    <Link onClick={() => deleteBudget(currentBudget.name)} to="/budget"><button id="bt-btn" >Delete Budget</button></Link>
                </div>
                <div className="over-expense-div">

                    <div id={id} className="over-expense-individaul-div">
                        <div id="ex-head">
                            <h1 className="ex-hh">Name</h1>
                            <h1 className="ex-hh">Spent</h1>
                            <h1 className="ex-hh">Date</h1>
                        </div>
                        <div id="over-allEx-div">
                            {expArray.length===0?
                            <h1 id="no-ex-h">No Expenses Incurred for {currentBudget.name}</h1>
                       :  expArray.map(obj => {
                                return <div id="ex-b">
                                    <h4 className="over-ex-n">{obj.name}</h4>
                                    <h4 className="over-ex-a">{<FormatPrice amount={Number(obj.amount)} />}</h4>
                                    <h4 className="over-ex-d">{<FormatDate date={obj.date} />}</h4>
                                </div>
                            })
                        }
                    <Link to="/budget"><button id="ex-btn" >Add New Expenses</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default BudgetOverview