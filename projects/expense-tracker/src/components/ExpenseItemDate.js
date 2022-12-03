import React from "react";
import "./ExpenseItemDate.css";

export default function ExpenseItemDate(props) {
  const date = props.date;
  function dateToLongMonth(d) {
    return d.toLocaleString("en-US", { month: "long" });
  }
  const month = dateToLongMonth(date);
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
