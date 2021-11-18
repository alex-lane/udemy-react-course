import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Alex", age: 35 },
    { name: "Lyndsie", age: 35 },
  ]);
  return (
    <div>
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;
