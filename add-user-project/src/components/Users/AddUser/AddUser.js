import React, { createRef, useState } from "react";
import { v4 as uuid4 } from "uuid";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const nameInputRef = createRef();
  const ageInputRef = createRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid user name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    onAddUser({ id: uuid4(), username, age });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            displayName="Username"
            ref={nameInputRef}
          />
          <Input
            type="number"
            id="age"
            displayName="Age (Years)"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
