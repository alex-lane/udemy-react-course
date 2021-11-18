import styles from "./Input.module.css";

const Input = ({ id, type, displayName }) => {
  return (
    <div className={styles["form-control"]}>
      <label htmlFor={id}>{displayName}</label>
      <input id={id} type={type} />
    </div>
  );
};

export default Input;
