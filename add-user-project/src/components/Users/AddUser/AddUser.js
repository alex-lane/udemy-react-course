import Input from "../../UI/Input/Input";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles["add-user-form"]} onSubmit={addUserHandler}>
      <Input type="text" id="username" displayName="Username" />
      <Input type="number" id="age" displayName="Age (Years)" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
