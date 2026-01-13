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
          <button>
            <a
              href="https://drive.google.com/file/d/1O7KvJL3cr5CIdS0sN20eqsp-KZK608C4/view?usp=sharing"
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
