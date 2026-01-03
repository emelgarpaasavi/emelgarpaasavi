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
            A programmer, creative and data analyst. I enjoy turning code into
            meaningful and visually rich experiences.
          </p>
          <button>Download Resume</button>
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
