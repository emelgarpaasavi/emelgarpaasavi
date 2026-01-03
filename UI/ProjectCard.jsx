import classes from "./ProjectCard.module.css";
import upwardIcon from "/arrow_upward_24px.svg";

export default function ProjectCard({ link, title, tools, screenshot }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.projects}>
      <div
        className={classes.card}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      </div>
      <div className={classes.backdrop}>
        <div className={classes.icon}>
          <img src={upwardIcon} alt="Upward Icon" />
        </div>
        <div className={classes.caption}>
          <h2>{title}</h2>
          <div>
            {tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
