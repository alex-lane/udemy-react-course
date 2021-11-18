import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: "id1", name: "Alex", age: 35 },
    { id: "id2", name: "Lyndsie", age: 35 },
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
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
