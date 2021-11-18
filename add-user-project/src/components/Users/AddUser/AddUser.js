import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const AddUser = ({ onAddUser }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const usernameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      return;
    }

    if (+userInput.age < 1) {
      return;
    }

    onAddUser({ id: uuid4(), ...userInput });
    setUserInput({
      username: "",
      age: "",
    });
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <Input
          type="text"
          id="username"
          value={userInput.username}
          displayName="Username"
          onChange={usernameChangeHandler}
        />
        <Input
          type="number"
          id="age"
          value={userInput.age}
          displayName="Age (Years)"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
