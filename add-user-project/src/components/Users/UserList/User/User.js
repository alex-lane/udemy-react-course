import Button from "../../../UI/Button/Button";
import styles from "./User.module.css";

const User = ({ id, name, age, onDeleteUser }) => {
  const deleteUserHandler = (id) => {
    const updatedUsers = onDeleteUser(id);
  };

  return (
    <>
      <div className={styles.user}>
        {name} ({age} years old)
      </div>
      <Button onClick={() => deleteUserHandler(id)}>Delete</Button>
    </>
  );
};

export default User;
