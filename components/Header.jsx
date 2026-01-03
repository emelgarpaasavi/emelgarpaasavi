import AnchorLink from "react-anchor-link-smooth-scroll";
import personalLogo from "/Emel gar.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.container}>
        <div>
          <img src={personalLogo} alt="Emelgar Logo"></img>
        </div>
        <nav>
          <AnchorLink href="#projects">Projects</AnchorLink>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}
