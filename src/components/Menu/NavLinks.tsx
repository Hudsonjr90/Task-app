import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "De hoje",
    path: "/today",
  },
  {
    name: "Todas",
    path: "/",
  },
  {
    name: "Importantes",
    path: "/important",
  },
  {
    name: "Finalizadas",
    path: "/completed",
  },
  {
    name: "Incompletas",
    path: "/uncompleted",
  },
];

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const route = useLocation();
  const currentPath = route.pathname;
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={`px-4 py-2 w-full block transition hover:text-green-800 dark:hover:text-slate-200 ${
                currentPath === link.path ? classActive : ""
              }`}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
