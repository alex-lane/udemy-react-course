import styles from "./Input.module.css";

const Input = ({ id, type, className, displayName }) => {
  return (
    <div className={`${styles["form-control"]} ${className}`}>
      <label htmlFor={id}>{displayName}</label>
      <input id={id} type={type} />
    </div>
  );
};

export default Input;
