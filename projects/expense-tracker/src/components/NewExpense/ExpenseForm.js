import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  /*
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });
  */

  const titleChangeHandler = (ev) => {
    console.log("Title input changed. Current value: " + ev.target.value);
    setTitle(ev.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState, // persists existing properties via spread
    //     title: ev.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (ev) => {
    console.log("Amount input changed. Current value: " + ev.target.value);
    setAmount(ev.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: ev.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (ev) => {
    console.log("Date input changed. Current value: " + ev.target.value);
    setDate(ev.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: new Date(ev.target.value),
    //   };
    // });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const expenseData = { title: title, amount: +amount, date: new Date() };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
