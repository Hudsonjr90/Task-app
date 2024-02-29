import React from "react";
import avatar1 from "../../assets/avatar-1.jpg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import LayoutMenus from "../Utilities/LayoutMenus";
import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";

const AccountData: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuAccountOpened);

  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuAccount());
  };

  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="top-0 right-0 "
    >
      <section className="p-5 flex flex-col h-full">
        <span className="flex items-center mx-auto">
          <span className="font-medium">Olá, usuário!</span>
          <img src={avatar1} alt="pic" className="w-10 rounded-full ml-4" />
        </span>

        <DarkMode />

        <TasksDone />
        <DeleteTasks />
        <a
          href="https://github.com/Hudsonjr90"
          target="blank_"
          className="mt-4 bg-grey-100 p-2 rounded-md text-grey-600 text-center transition hover:bg-green-200 dark:bg-slate-700/[.3] dark:text-slate-200"
        >
          Desenvolvido por Hudson Kennedy
        </a>
      </section>
    </LayoutMenus>
  );
};

export default AccountData;
