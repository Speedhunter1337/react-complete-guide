import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
	const renderExpenses = expenses.map((expense) => (
		<ExpenseItem key={expense.id} expense={expense} />
	));

	return <div className="expenses">{renderExpenses}</div>;
};

export default Expenses;
