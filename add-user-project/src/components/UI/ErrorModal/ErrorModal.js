import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onCloseClick }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onCloseClick} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseClick}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
