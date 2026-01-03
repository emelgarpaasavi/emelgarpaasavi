import classes from "./Footer.module.css";
import forwardIcon from "/arrow_forward_24px.svg";

export default function Footer() {
  return (
    <>
      <div className={classes.cta} id="contact">
        <h1>Let&apos;s</h1>
        <h1>work</h1>
        <h1>together.</h1>
        <div className={classes.icon_position}>
          <img src={forwardIcon} alt="Forward Icon" />
        </div>
        <div className={classes.email_position}>
          <a href="mailto:emelgarpaasa@gmail.com">emelgarpaasa@gmail.com</a>
        </div>
        <footer>
          <span>Copyright: © 2026. All rights reserved.</span>
          <div>
            <a
              href="https://www.linkedin.com/in/emelgarpaasavi"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/renkeeen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
