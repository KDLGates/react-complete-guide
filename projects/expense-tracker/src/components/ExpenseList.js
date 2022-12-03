import React from 'react'

// takes expenses array
export default function ExpenseList(props) {
    for (expense in props) {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    }
}
