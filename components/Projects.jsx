import Card from "../UI/ProjectCard";
import classes from "./Projects.module.css";
import { useInView } from "react-intersection-observer";
import dataAnalytics from "../src/assets/Project Screenshots/Data Analytics.jpg";
import eCommerceApp from "../src/assets/Project Screenshots/Cozy Ember Online Store.png";
import travelItineraryPlanner from "../src/assets/Project Screenshots/Travel Itinerary App.png";
import interactiveTheatre from "../src/assets/Project Screenshots/Interactive Theatre.png";
import webDesign from "../src/assets/Project Screenshots/Team App.png";

export default function Projects() {
  const { ref, inView } = useInView();

  const dataAnalyticsTools = ["Pandas", "Numpy", "SQL", "Tensorflow", "Selenium"];
  const eCommerceTools = ["React", "Next.js", "CSS", "MongoDB"];
  const itineraryPlannerTools = ["React", "Node.js", "CSS", "Redux", "MUI"];
  const interactiveTheatreTools = ["React", "Motion", "Tailwind CSS"];
  const webDesignTools = ["Figma", "Webflow", "Web Design"];

  return (
    <section ref={ref} className={classes.projects} id="projects">
      <h1>PROJECTS</h1>

      {inView && (
        <div className={classes.cards}>
          <Card
            link="https://github.com/emelgarpaasavi/Portfolio"
            title="Data Analytics"
            tools={dataAnalyticsTools}
            screenshot={dataAnalytics}
          />
          <Card
            link="https://cozy-ember.vercel.app/"
            title="E-Commerce Web App"
            tools={eCommerceTools}
            screenshot={eCommerceApp}
          />
          <Card
            link="https://emelgarpaasavi.github.io/travelog/"
            title="Travel Itinerary Planner"
            tools={itineraryPlannerTools}
            screenshot={travelItineraryPlanner}
          />
          <Card
            link="https://emelgarpaasavi.github.io/interactive-theatre/"
            title="Interactive Theatre"
            tools={interactiveTheatreTools}
            screenshot={interactiveTheatre}
          />
          <Card
            link="https://jas-team-app.webflow.io/"
            title="Team App Webpage"
            tools={webDesignTools}
            screenshot={webDesign}
          />
        </div>
      )}
    </section>
  );
}
