import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Today's tasks", "De hoje");

  return (
    <LayoutRoutes title="De hoje" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
