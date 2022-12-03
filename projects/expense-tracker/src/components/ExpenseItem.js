import React from "react";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

// takes title, amount, date
export default function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount;
  return (
    <div className="expense-item">
      <ExpenseItemDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
