import React from "react";
import { Buttons, links } from "../../constants/content";
import icons from "../../constants/icons";
import styles from "./Navbar.module.scss";

const capitalize = (str: string) =>
  str ? str[0].toUpperCase().concat(str.slice(1)) : "";

export const Navbar = () => {
  return (
    <nav
    // className={styles.nav}
    >
      <div>
        <img src={icons.logo} alt="logo" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href={link} onClick={() => {}}>
              {capitalize(link)}
            </a>
          </li>
        ))}
        <li>
          <button>{Buttons.login}</button>
        </li>
        <li>
          <button>{Buttons.register}</button>
        </li>
      </ul>
    </nav>
  );
};
