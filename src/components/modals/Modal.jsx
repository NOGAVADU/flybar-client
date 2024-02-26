import cl from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={active ? [cl.modal, cl.active].join(" ") : cl.modal}
            onClick={() => setActive(false)}
        >
            <div
                className={
                    active
                        ? [cl.modal__content, cl.active].join(" ")
                        : cl.modal__content
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={cl.modal__header}>
                    <button
                        className={cl.modal__controlsCloseBtn}
                        onClick={() => setActive(false)}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </div>
                <div className={cl.modal__body}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
