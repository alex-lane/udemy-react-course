import { v4 as uuid4 } from "uuid";
import Card from "../../Card/Card";
import Input from "../../UI/Input/Input";
import styles from "./AddUser.module.css";

const AddUser = ({ onAddUser }) => {
  const addUserHandler = (event) => {
    event.preventDefault();

    onAddUser({ id: uuid4(), name: "Test", age: 25 });
  };

  return (
    <Card>
      <form className={styles["add-user-form"]} onSubmit={addUserHandler}>
        <Input type="text" id="username" displayName="Username" />
        <Input type="number" id="age" displayName="Age (Years)" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
