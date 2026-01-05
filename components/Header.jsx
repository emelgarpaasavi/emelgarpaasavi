import AnchorLink from "react-anchor-link-smooth-scroll";
import personalLogo from "/Emel gar.svg";
import menuIcon from "/menu_24px.svg";
import classes from "./Header.module.css";
import { useState } from "react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleMenuDropdown() {
    setShowDropdown((prevSetup) => !prevSetup);
  }

  return (
    <>
      <header className={classes.container}>
        <div>
          <img src={personalLogo} alt="Emelgar Logo"></img>
        </div>

        <nav>
          <img
            src={menuIcon}
            onClick={handleMenuDropdown}
            className={classes.menu_icon}
            alt="menu icon"
          />
          <div className={classes.menu}>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>
      {showDropdown && (
        <div className={classes.menu_position}>
          <div className={classes.menu_dropdown}>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <p>|</p>
            <a href="#about">About me</a>
            <p>|</p>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </>
  );
}
