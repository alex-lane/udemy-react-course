import styles from "./UserList.module.css";
import User from "./User/User";

const UserList = ({ users }) => {
  return (
    <div className={styles["user-list"]}>
      {users.map((user) => (
        <User name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
