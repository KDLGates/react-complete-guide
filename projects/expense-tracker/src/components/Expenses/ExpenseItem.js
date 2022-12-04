import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

// takes title, amount, date
export default function ExpenseItem(props) {
  // Array destructuring of useState array
  // [value, React.Dispatch] is best assigned via array destructuring
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Updating " + title);
    setTitle(title + " (Clicked)");
  }

  return (
    <Card className="expense-item">
      <ExpenseItemDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
}
