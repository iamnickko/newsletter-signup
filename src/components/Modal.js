import { createPortal } from "react-dom";
import Button from "./Button";
import tick from "../images/icon-list.svg";

const Background = (props) => {
  return (
    <div className="fixed bg-darkslategrey z-9 w-full h-screen">{props.children}</div>
  );
};

const ModalContent = ({ onClose, email }) => {
  return (
    <Background>
      <dialog
        open
        className="z-8 rounded-3xl p-8 content-center mx-auto max-w-md my-auto"
      >
        <img className="mb-8 w-12" src={tick} alt="success tick" />
        <h1 className="text-5xl font-bold mb-5">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>

        <Button className='mt-7 mb-5' onClick={onClose}>Dismiss message</Button>
      </dialog>
    </Background>
  );
};

const Modal = ({ onClose, email }) => {
  return createPortal(
    <ModalContent onClose={onClose} email={email} />,
    document.getElementById("modal")
  );
};

export default Modal;
