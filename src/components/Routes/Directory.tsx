import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const Directory: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const directories = useAppSelector((state) => state.tasks.directories);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.dir}"`,
    params.dir ? params.dir + "" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState<
    Task[]
  >([]);

  useEffect(() => {
    if (typeof params.dir !== 'string') {
      return; // Se params.dir for undefined ou não for uma string, saia do useEffect
    }
  
    const dirExists = directories.includes(params.dir);
    if (!dirExists) {
      navigate("/");
      return; // Saia do useEffect se o diretório não existir
    }
  
    const tasksFiltered = tasks.filter((task: Task) => task.dir === params.dir);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [directories, navigate, params.dir, tasks]);
  

  return (
    <LayoutRoutes
      title={`${params.dir}`}
      tasks={tasksInCurrentDirectory}
    />
  );
};

export default Directory;
