import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    age: "",
  });

  const [error, setError] = useState();

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
      setError({
        title: "Invalid input",
        message: "Please enter a valid user name and age (non-empty values).",
      });
      return;
    }

    if (+userInput.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    onAddUser({ id: uuid4(), ...userInput });
    setUserInput({
      username: "",
      age: "",
    });
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCloseClick={() => setError()}
        />
      )}
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
    </>
  );
};

export default AddUser;
