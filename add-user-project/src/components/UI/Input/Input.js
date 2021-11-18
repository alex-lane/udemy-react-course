import styles from "./Input.module.css";

const Input = ({ id, type, className, value, displayName, onChange }) => {
  return (
    <div className={`${styles["form-control"]} ${className}`}>
      <label htmlFor={id}>{displayName}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
