import { useState } from "react";

import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");

  const onFilterYearChangeHandler = (selectedYear) => {
    console.log("In Expenses.js selected: " + selectedYear);
    setYear(selectedYear);
    console.log("In Expenses.js state: " + year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onYearChange={onFilterYearChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
