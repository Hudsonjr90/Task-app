import { useEffect, useState } from "react";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";

const useSearchQuery = (searchQuery: string) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const [matchedTasks, setMatchedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task: Task) => {
      // Verifica se task.title existe antes de chamar toLowerCase()
      return task.title && task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchQuery, tasks]);

  return matchedTasks;
};

export default useSearchQuery;
