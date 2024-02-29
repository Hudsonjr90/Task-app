import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Modal from "./Modal";

const ModalDirectory: React.FC<{
  onClose: () => void;
  dirName?: string;
  onConfirm: (newDirName: string) => void;
  btnText: string;
  title: string;
}> = ({ onClose, dirName, onConfirm, btnText, title }) => {
  const directories = useAppSelector((store) => store.tasks.directories);

  const [errorDirectoryName, setErrorDirectoryName] = useState<boolean>(false);
  const [newDirName, setNewDirName] = useState<string>(dirName ? dirName : "");

  const checkDirNameExists = (val: string) => {
    const directoryDoesNotExist = directories.every(
      (dir: string) => dir !== val
    );

    if (directoryDoesNotExist || dirName === val) {
      setErrorDirectoryName(false);
    } else {
      setErrorDirectoryName(true);
    }
  };

  const confirmDirNameHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (errorDirectoryName) return;
    onConfirm(newDirName);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={title}>
      <form className="stylesInputsField">
        <div className="relative">
          <label htmlFor="dir-name" className="">
            Título
          </label>
          <input
            type="text"
            id="dir-name"
            placeholder="Insira um nome para a pasta"
            value={newDirName}
            onChange={({ target }) => setNewDirName(target.value)}
            className={`inputStyles block w-full`}
            onInput={({ currentTarget }) =>
              checkDirNameExists(currentTarget.value)
            }
          />
          {errorDirectoryName && (
            <div className="absolute bg-blue-500 text-slate-200 rounded-md p-2 top-full text-sm w-full font-medium z-20">
              Já existe uma pasta com esse nome
            </div>
          )}
        </div>
        <button className="btn mt-6" onClick={confirmDirNameHandler}>
          {btnText}
        </button>
      </form>
    </Modal>
  );
};

export default ModalDirectory;
