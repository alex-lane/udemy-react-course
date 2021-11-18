import Button from "../../../UI/Button/Button";
import styles from "./User.module.css";

const User = ({ id, username, age, onDeleteUser }) => {
  const deleteUserHandler = (id) => {
    onDeleteUser(id);
  };

  return (
    <>
      <div className={styles.user}>
        {username} ({age} years old)
      </div>
      <Button onClick={() => deleteUserHandler(id)}>Delete</Button>
    </>
  );
};

export default User;
