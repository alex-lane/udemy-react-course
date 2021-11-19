import { forwardRef } from "react";
import styles from "./Button.module.css";

const Button = forwardRef(({ type, onClick, className, children }, ref) => (
  <button
    type={type || "button"}
    className={`${styles.button} ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
));

export default Button;
