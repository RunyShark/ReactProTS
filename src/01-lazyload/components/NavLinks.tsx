import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
export const NavLinks = () => {
  return (
    <>
      {routes.map(({ to, name }) => (
        <li key={to}>
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </>
  );
};
