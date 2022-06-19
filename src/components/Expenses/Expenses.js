import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const renderExpenses = items.map((item) => (
		<ExpenseItem key={item.id} item={item} />
	));

	return <Card className="expenses">{renderExpenses}</Card>;
};

export default Expenses;
