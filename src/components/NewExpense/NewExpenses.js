import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = ({ onAddExpense }) => {
	const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = {
			...enteredExpenseDate,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
