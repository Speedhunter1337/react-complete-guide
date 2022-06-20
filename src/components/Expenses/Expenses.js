import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart.js";

const Expenses = ({ items }) => {
	const [yearFilter, setYearFilter] = useState(2020);

	const filterChangeHandler = (year) => {
		setYearFilter(year);
	};

	const filterExpenses = items.filter(
		(expense) => expense.date.getFullYear().toString() === yearFilter
	);

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					yearFilter={yearFilter}
					onYearFilterChange={filterChangeHandler}
				/>
				<ExpenseChart expenses={filterExpenses} />
				<ExpensesList items={filterExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
