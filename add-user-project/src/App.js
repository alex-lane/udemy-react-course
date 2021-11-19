import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: "id1", username: "Alex", age: 35 },
    { id: "id2", username: "Lyndsie", age: 35 },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  const deleteUserHandler = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      return updatedUsers;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 && (
        <UserList users={users} onDeleteUser={deleteUserHandler} />
      )}
    </>
  );
}

export default App;
