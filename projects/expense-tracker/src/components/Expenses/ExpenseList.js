import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onFilterYearChange={setFilterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* Lean version! ref. (66.) of the course for interesting short-circuit alternatives */}
        {/* expensesContent is the list of ExpenseItems that match the filter year */}
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}
