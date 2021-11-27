import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props: {onClose: ()=>void}) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = ( props:ModalOverlayProps ) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

interface ModalOverlayProps {
  children: React.ReactNode;
}

const portalElement = document.getElementById("overlays");

const Modal = ( props: ModalProps ) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}