import { v4 as uuid4 } from "uuid";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const AddUser = ({ onAddUser }) => {
  const addUserHandler = (event) => {
    event.preventDefault();
    onAddUser({ id: uuid4(), name: "Test", age: 25 });
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <Input type="text" id="username" displayName="Username" />
        <Input type="number" id="age" displayName="Age (Years)" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
