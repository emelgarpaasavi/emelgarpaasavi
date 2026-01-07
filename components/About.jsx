import classes from "./About.module.css";
import aboutMeImage from "../src/assets/About me Profile.jpg";

export default function About() {
  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <div className={classes.image_container}>
          <img src={aboutMeImage} alt="An image of Emelgar sitting"></img>
          <button>
            <a
              href="https://drive.google.com/file/d/1O7KvJL3cr5CIdS0sN20eqsp-KZK608C4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className={classes.text_container}>
          <h1>
            I&apos;m a creative, language enthusiast and a natural problem
            solver.
          </h1>
          <p>
            I love to create digital experiences that are meaningful and
            engaging. With background in programming, e-commerce, data analysis
            and creative design, I enjoy bridging logic with creativity.
          </p>
          <p>
            I&apos;m also a language enthusiast. Currently, I&apos;m
            intermediate in Spanish and beginner in Japanese and German. I
            believe that learning a new language can open new opportunities -
            but most of all, I can now watch my favorite Spanish series without
            English subtitles which is cool.
          </p>
        </div>
      </div>
    </section>
  );
}
