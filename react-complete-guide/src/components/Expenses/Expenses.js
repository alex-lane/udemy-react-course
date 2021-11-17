import { useState } from "react";

import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2020");

  const onFilterYearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpensesByYear = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={year}
        onYearChange={onFilterYearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpensesByYear} />
      <ExpensesList expenses={filteredExpensesByYear} />
    </Card>
  );
};

export default Expenses;
