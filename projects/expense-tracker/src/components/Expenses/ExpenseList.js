import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  const [filterYear, setFilterYear] = useState(new Date());
  const setFilterYearHandler = (year) => {
    console.log("In ExpenseList");
    console.log(`Filter Year updated to ${year}`);
    setFilterYear(year);
  };

  // Filter props.expenses down to the year matching the ExpensesFilter's
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  // Produce both a default and a populated list of expenses JSX.
  let expensesContent = <p>No expenses found for the selected year.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onFilterYearChange={setFilterYearHandler}
        />
        {/* Lean version! ref. (66.) of the course for interesting short-circuit ternary alternatives */}
        {expensesContent}
      </Card>
    </div>
  );
}
