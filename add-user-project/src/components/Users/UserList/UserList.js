import User from "./User/User";
import Card from "../../UI/Card/Card";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <Card>
      {users.map((user) => (
        <User
          key={user.id}
          id={user.id}
          username={user.username}
          age={user.age}
          onDeleteUser={onDeleteUser}
        />
      ))}
    </Card>
  );
};

export default UserList;
