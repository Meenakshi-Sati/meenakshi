import FormatPrice from "./FormatPrice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BudgetOverview from "./BudgetOverview";

function BudgetItem({ id,budgetArray,setBudgetArray, expenseArray, budgetObj }) {
    const [currentBudgetAmount, setCurrentBudgetAmount] = useState("")
    const [currentExpenseArr, setCurrentExpenseArr] = useState([])
    const [totalSpentAmt, setTotalSpentAmt] = useState(0)
    const [remainingAmount, setRemainingAmount] = useState(0)

    useEffect(() => {
        let currentAmount = Number(budgetObj.amount)
        setCurrentBudgetAmount(currentAmount)
        getCurrentExpenseAmount()
    }, [expenseArray, budgetObj])

    function getCurrentExpenseAmount() {
        if (expenseArray && expenseArray.length !== 0) {
            let currentExpense = expenseArray.filter(obj => obj.category === budgetObj.name)
            let totalSpentAmount = currentExpense.reduce((ac, item) => ac + Number(item.amount), 0)
            setTotalSpentAmt(totalSpentAmount)
            getCurrentRemainingAmount(totalSpentAmount)
           
        }
    }

    function getCurrentRemainingAmount(totalSpentAmount) {
        let remainingAmnt = +(budgetObj.amount - totalSpentAmount)
        setRemainingAmount(remainingAmnt)
    }

    return (

        <Link to={`/budgetoverview/${id}`}>
            <div id={id} className="budget-item-individual-div">
                <h6 className="budget-name">{budgetObj.name}</h6>
                <h6 className="budget-amount">{<FormatPrice amount={currentBudgetAmount} />}</h6>
                <input type="range" className="budget-range" max={budgetObj.amount} value={totalSpentAmt} />                <div className="spent-remain-div">
                    <div className="spent-div">
                        <h6 className="spent-amount">{<FormatPrice amount={totalSpentAmt} />}</h6>
                        <h6 className="spent-h">spent</h6>
                    </div>
                    <div className="remaining-div">
                        <h6 className="remaining-amount">{<FormatPrice amount={remainingAmount} />}</h6>
                        <h6 className="remaining-h">remaining</h6>
                    </div>
                </div>
            </div>
        </Link>
    );
}
export default BudgetItem