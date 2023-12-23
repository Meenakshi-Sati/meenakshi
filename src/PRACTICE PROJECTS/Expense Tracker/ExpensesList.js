import FormatDate from "./FormatDate"
import FormatPrice from "./FormatPrice"

function ExpensesList({ expenseObj,id,deleteExpense }) {

    return (
        <div>
        <div id={id} className="expense-individaul-div">
            <h4 className="expense-name">{expenseObj.name}</h4>
            <h4  className="expense-amount">{<FormatPrice amount={Number(expenseObj?.amount)} />}</h4>
            <h4 className="expense-date">{<FormatDate date={expenseObj.date} />}</h4>
            <img onClick={()=>deleteExpense(expenseObj.id)} className="ex-del-icon" src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png" alt="" />
        </div>
        <hr  className="line"/>
        </div>
    )
}
export default ExpensesList