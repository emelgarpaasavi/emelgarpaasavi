import radioButtonIcon from "/radio_button_checked_24px.svg";
import classes from "./Experience.module.css";

export default function Experience({
  time,
  position,
  company,
  desc1,
  desc2,
  view,
}) {
  return (
    <div className={classes.experience_container}>
      {view == 1 && (
        <>
          <div className={classes.date}>
            <p>{time}</p>
          </div>
          <div className={classes.icon}>
            <img src={radioButtonIcon} alt="Radio button icon" />
            <div className={classes.line}></div>
          </div>
          <div className={classes.description}>
            <h2>{position}</h2>
            <h3>{company}</h3>
            <p>{desc1}</p>
            <p className={classes.desc2}>{desc2}</p>
          </div>
        </>
      )}
    </div>
  );
}
