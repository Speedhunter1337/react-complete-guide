import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import SomeComponent from "./SomeComponent.js";

const ExpenseItem = ({ expense }) => {
  const { title, amount, date } = expense;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
