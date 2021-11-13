import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
