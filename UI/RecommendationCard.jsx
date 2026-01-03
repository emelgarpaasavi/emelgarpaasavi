import classes from "./RecommendationCard.module.css";

export default function RecommendationCard({
  content1,
  content2,
  name,
  company,
  position,
}) {
  return (
    <div className={classes.recommendation_container}>
      <div className={classes.recommendation_card}>
        <p>{content1}</p>
        <p>{content2}</p>
      </div>
      <div className={classes.name_container}>
        <div className={classes.reviewer}>
          <span className={classes.name}>{name}</span>
          <span className={classes.company}>{company}</span>
          <span className={classes.position}>{position}</span>
        </div>
      </div>
    </div>
  );
}
