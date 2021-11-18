import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = ({ users }) => {
  return (
    <div className={styles["user-list"]}>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
