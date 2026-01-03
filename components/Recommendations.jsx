import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import RecommendationCard from "../UI/RecommendationCard";
import classes from "./Recommendations.module.css";

export default function Recommendations() {
  const { ref, inView } = useInView();
  const [view, setView] = useState(0);

  useEffect(() => {
    if (inView && view == 0) {
      setView((prevView) => prevView + 1);
    }
  }, [inView, view]);

  return (
    <div className={classes.recommendations}>
      <h1 ref={ref}>WHAT PEOPLE SAY</h1>
      {view == 1 && (
        <div className={classes.container}>
          <RecommendationCard
            content1='"Having started with no experience in the automotive software development, Emelgar listens carefully to
instructions, and clarifies as needed. He complies with the rules and regulations and he is pleasant to
work with because of his diligence to do his work within the allotted schedule.'
            content2='He was assigned other projects in NSP which allowed him to work in Japan for business purposes. His
experience working under pressure, building his career and trying new things like learning a new language
is what I admire about him..."'
            name="Helen Grace R., "
            position="NEC Telecom Software Philippines, Inc."
            company="Assistant Senior Manager"
          />
          <RecommendationCard
            content1='"During his tenure, I had the distinct privilege of overseeing their work and observing his professional
growth and contributions.'
            content2='Emelgar possesses a strong work ethic and an impressive ability to manage multiple priorities effectively.
His communication skills, both written and verbal, are excellent, and he consistently maintained a
professional and courteous demeanour with colleagues...."'
            name="Kyle W., "
            position="Head of Business Analytics"
            company="IWG | Regus"
          />
        </div>
      )}
    </div>
  );
}
