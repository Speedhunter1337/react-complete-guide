import { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ item }) => {
  const { title, amount, date } = item;
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = (event) => {
    setItemTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Button</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
