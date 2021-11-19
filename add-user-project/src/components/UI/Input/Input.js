import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(
  ({ id, type, className, value, displayName, onChange }, ref) => (
    <div className={`${styles["form-control"]} ${className}`}>
      <label htmlFor={id}>{displayName}</label>
      <input id={id} type={type} value={value} onChange={onChange} ref={ref} />
    </div>
  )
);

export default Input;
