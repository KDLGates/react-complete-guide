import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // Produce both a default and a populated list of expenses JSX.
  let expensesContent = <p>No expenses found for the selected year.</p>;
  if (props.items.length > 0) {
    // Populate expensesContent as the list of ExpenseItems that match the filter year
    expensesContent = props.items.map((expense) => (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    ));
  }

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
