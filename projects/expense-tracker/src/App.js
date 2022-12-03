import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
