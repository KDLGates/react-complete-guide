import ExpenseList from "./components/ExpenseList";

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
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
