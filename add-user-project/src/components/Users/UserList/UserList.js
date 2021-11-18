import User from "./User/User";
import Card from "../../Card/Card";

const UserList = ({ users }) => {
  return (
    <Card>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </Card>
  );
};

export default UserList;
