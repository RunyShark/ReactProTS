import { BrowserRouter } from "react-router-dom";

import { NavLinks, ComRouter } from "../index/index";
import logo from "../logo.svg";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react-logo" />
          <ul>
            <NavLinks />
          </ul>
        </nav>
        <ComRouter />
      </div>
    </BrowserRouter>
  );
};
