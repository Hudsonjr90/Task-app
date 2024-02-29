import React from "react";
import { ReactComponent as IconView1 } from "../../assets/view-1.svg";
import { ReactComponent as IconView2 } from "../../assets/view-2.svg";

const sortValues = [
  { value: "min-date", title: "Antigas" },
  { value: "max-date", title: "Recentes" },
  { value: "completed-first", title: "Finalizadas" },
  { value: "uncompleted-first", title: "Incompletas" },
];

const ButtonsSort: React.FC<{
  isListInView1: boolean;
  sortedBy: string;
  setSortedBy: (option: string) => void;
  setIsListInView1: (status: boolean) => void;
}> = ({ isListInView1, setIsListInView1, sortedBy, setSortedBy }) => {
  return (
    <div className="flex children-styles">
      <button onClick={() => setIsListInView1(true)} title="view in list">
        <IconView1 className={isListInView1 ? "text-green-800" : ""} />
      </button>
      <button onClick={() => setIsListInView1(false)} title="view in grid">
        <IconView2 className={!isListInView1 ? "text-green-800" : ""} />
      </button>
      <select
        className="ml-auto inputStyles"
        value={sortedBy}
        onChange={({ target }) => setSortedBy(target.value)}
      >
        <option value="" disabled>
          Filtrar por
        </option>
        {sortValues.map((val) => (
          <option
            key={val.value}
            value={val.value}
            className="bg-slate-100 dark:bg-slate-800"
          >
            {val.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ButtonsSort;
