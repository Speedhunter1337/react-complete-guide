import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
	const [isEditing, setIsEditing] = useState(false);

	const startEditingHandler = (bool) => {
		setIsEditing(bool);
	};

	const saveExpenseDataHandler = (enteredExpenseDate) => {
		const expenseData = {
			...enteredExpenseDate,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
		setIsEditing(false);
	};

	let renderedForm = (
		<button onClick={() => startEditingHandler(true)} type="button">
			Add New Expense
		</button>
	);

	if (isEditing) {
		renderedForm = (
			<ExpenseForm
				onIsEditingClick={startEditingHandler}
				onSaveExpenseData={saveExpenseDataHandler}
			/>
		);
	}

	return <div className="new-expense">{renderedForm}</div>;
};

export default NewExpense;
