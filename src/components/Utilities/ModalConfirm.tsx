import React from "react";
import Modal from "./Modal";

const ModalConfirm: React.FC<{
  onConfirm: () => void;
  onClose: () => void;
  text: string;
}> = ({ onConfirm, onClose, text }) => {
  const confirmAndCloseModal = () => {
    onConfirm();
    onClose();
  };
  return (
    <Modal onClose={onClose} title="Tem certeza?">
      <p className="text-slate-500">{text}</p>
      <div className="mt-7 ml-auto">
        <button onClick={confirmAndCloseModal} className="btn ml-4">
          Confirmar
        </button>
        <button onClick={onClose} className="ml-4">Cancelar</button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
