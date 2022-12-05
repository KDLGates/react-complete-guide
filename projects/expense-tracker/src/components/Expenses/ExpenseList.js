import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  const expenses = props.expenses;
  const [ filterYear, setFilterYear ] = useState("2022");
  const setFilterYearHandler = (year) => {
    console.log("In ExpenseList");
    console.log(year);
    setFilterYear(year);
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={filterYear} onFilterYearChange={setFilterYearHandler} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}
