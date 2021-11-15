import { v4 as uuidv4 } from "uuid";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveNewExpenseHandler = (newExpense) => {
    const expenseData = { ...newExpense, id: uuidv4() };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
