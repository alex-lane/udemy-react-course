import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
};

export default NewExpense;
