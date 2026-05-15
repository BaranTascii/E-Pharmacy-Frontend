import { useModal } from "../ModalContext";

const Modal = () => {
  const { modalContent, closeModal } = useModal();

  if (!modalContent) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>
          ✕
        </button>

        {modalContent}
      </div>
    </div>
  );
};

export default Modal;
