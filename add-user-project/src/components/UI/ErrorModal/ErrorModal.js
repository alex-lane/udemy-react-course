import ReactDOM from "react-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ onCloseClick }) => {
  return <div className={styles.backdrop} onClick={onCloseClick} />;
};

const ModalOverlay = ({ title, message, onCloseClick }) => {
  return (
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
  );
};

const ErrorModal = ({ title, message, onCloseClick }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseClick={onCloseClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onCloseClick={onCloseClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
