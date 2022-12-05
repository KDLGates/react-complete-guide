import React from "react";
import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

// takes title, amount, date
export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
