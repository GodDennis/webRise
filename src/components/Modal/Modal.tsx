import ReactDOM from "react-dom";
import { useEffect } from "react";
import s from "./Modal.module.scss";

type ModalProps = {
    isOpened: boolean;
    onClose: () => void;
};

export default function Modal({ isOpened, onClose }: ModalProps) {
    const portalElement = document.getElementById("portal");

    const closeByEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", closeByEsc);
        return () => {
            document.removeEventListener("keydown", closeByEsc);
        };
    });

    if (!portalElement) {
        return null;
    }
    if (!isOpened) {
        return null;
    }
    return ReactDOM.createPortal(
        <div
            className={s.overlay}
            onClick={onClose}>
            <div
                className={s.modal}
                onClick={e => e.stopPropagation()}>
                Modal
            </div>
        </div>,
        portalElement
    );
}
