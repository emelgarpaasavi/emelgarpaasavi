import Header from "./Header";
import classes from "./Hero.module.css";
import emelgarProfileImg from "../src/assets/Emelgar Profile.png";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <Header />
      <div className={classes.container}>
        <div className={classes.text_container}>
          <h1>Hello! I&apos;m Emelgar</h1>
          <p>
            A programmer and data analyst who transforms code and data into meaningful, 
            visually engaging insights, building analytics and automation that help 
            businesses make smarter, data-driven decisions.
          </p>
          <button>
            <a
              href="https://drive.google.com/file/d/1H8sSQvcwlQWIl58adcYOp58O3foipb3B/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
          <button className={classes.github}>
            <a
              href="https://github.com/emelgarpaasavi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github
            </a>
          </button>
        </div>
        <div>
          <img
            src={emelgarProfileImg}
            className={classes.profile}
            alt="An image of Emelgar in a formal attire"
          ></img>
        </div>
      </div>
    </section>
  );
}
