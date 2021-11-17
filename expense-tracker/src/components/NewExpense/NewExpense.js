import { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditingExpense, setIsEditingExpense] = useState(false);

  const startEditingHandler = () => {
    setIsEditingExpense(true);
  };

  const stopEditingHandler = () => {
    setIsEditingExpense(false);
  };

  return (
    <div className="new-expense">
      {isEditingExpense && (
        <ExpenseForm
          onAddExpense={onAddExpense}
          stopEditingHandler={stopEditingHandler}
        />
      )}
      {!isEditingExpense && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
