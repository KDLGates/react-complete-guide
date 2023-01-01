import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseList from "./components/Expenses/ExpenseList";

const initialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 3),
  },
  {
    id: "e2",
    title: "Flood Insurance",
    amount: 999.69,
    date: new Date(Date.UTC(2022, 3, 2, 17)),
  },
  {
    id: "e3",
    title: "Electricity Bill",
    amount: 123.45,
    date: new Date(2020, 2, 4),
  },
  {
    id: "e4",
    title: "Internet Bill",
    amount: 666.0,
    date: new Date(2019, 2, 5),
  },
];

// React root for the Expense Tracker app.
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  
  const addExpenseHandler = (expense) => {
    // NB: React wants a function with the previous state for a clean diff.
    // Recall the spread operator adds the new expense to the front of the previous array.
    setExpenses((prev) => [expense, ...prev]);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
