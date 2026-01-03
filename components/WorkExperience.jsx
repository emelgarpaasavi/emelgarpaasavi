import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Experience from "../UI/Experience";
import classes from "./WorkExperience.module.css";

export default function WorkExperience() {
  const { ref, inView } = useInView();
  const { ref: refWorkExp, inView: inViewWorkExp } = useInView();
  const [view, setView] = useState(0);
  const [viewWorkExp, setViewWorkExp] = useState(0);

  useEffect(() => {
    if (inView && view == 0) {
      setView((prevView) => prevView + 1);
    }
  }, [inView, view]);

  useEffect(() => {
    if (inViewWorkExp && viewWorkExp == 0) {
      setViewWorkExp((prevView) => prevView + 1);
    }
  }, [inViewWorkExp, viewWorkExp]);

  const animatedStyle = {
    transform: view == 1 ? `translateY(0px)` : `translateY(200px)`,
    transition: `5s ease-in`
  }

  return (
    <div ref={ref}>
      <section style={animatedStyle}
        className={classes.work_experience}
      >
        <h1 ref={refWorkExp}>WORK EXPERIENCE</h1>

        <div className={classes.container}>
          <Experience
            time="May 2024 - Sep 2024"
            position="Computational Scientist"
            company="Regus | Fulltime"
            desc1="Assisted in code optimization and documentation of the Forecast Simulation engine and updated and optimized the project's file processes. "
            desc2="Improved team collaboration and productivity of business analysis, lowering the running time to 30% by creating a forecast Excel macro tool to automate the creation of dashboards, forecast and targets."
            view={viewWorkExp}
          />
          <Experience
            time="Sep 2022 - Apr 2024"
            position="Amazon Virtual Assistant"
            company="Forefront Designs Ltd. | Fulltime"
            desc1="Managed an Amazon e-commerce account; created and updated product listings, generated investigation and sales reports, sourced and researched for suppliers, and replenished product Inventory on time which helped reduced inventory costs and improved customer service."
            desc2="Developed the brand website on Shopify and performed product and keyword (Search Engine Optimization) research."
            view={viewWorkExp}
          />
          <Experience
            time="Jul 2017 - Mar 2021"
            position="Software Design Engineer II"
            company="NEC Telecom Software Philippines, Inc. | Fulltime"
            desc1="Developed software programs by creating basic and detailed designs from analyzed requirements, coding, and performing unit and integration testing. "
            desc2="Performed analysis and bug fixing by reviewing design documents, codes, test specifications and investigation reports."
            view={viewWorkExp}
          />
        </div>
      </section>
    </div>
  );
}
