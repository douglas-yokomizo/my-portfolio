import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Animeroll",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/douglas-yokomizo/animeroll",
    projectLink: "https://animeroll-page.vercel.app/",
    tech: ["Bootstrap", "HTML5", "CSS3"],
    description:
      "A simple anime stream service concept built using Bootstrap",
    modalContent: (
      <>
        <p>
          AnimeRoll is a landing page for a platfotm dedicated to anime and manga enthusiasts, providing a collection of popular anime shows, manga series, and games. The website features a user-friendly interface and various sections to explore different content.
        </p>
        <p>
          The AnimeRoll website is built using HTML, CSS, and JavaScript. It utilizes the Bootstrap framework for responsive design and interactivity.
        </p>
      </>
    ),
  },
  {
    title: "Too Yeah",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/douglas-yokomizo/too-yeah",
    projectLink: "https://too-yeah.vercel.app/",
    tech: ["JavaScript", "HTML5", "CSS3"],
    description:
      "This is a landing page I built for my friend's restaurant",
    modalContent: (
      <>
        <p>
          I made this project for a friend&apos;s restaurant to showcases the menu and provides information about the restaurant.
        </p>
        <p>
          The project is built using HTML, CSS, and vanilla JavaScript to add animations and interactivity.
        </p>
      </>
    ),
  },
  {
    title: "Clone Disney+",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/douglas-yokomizo/clone_disneyplus",
    projectLink: "https://clone-disneyplus-f5fe.vercel.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Gulp", "SaSS"],
    description:
      "This project is a clone of the Disney+ website. It aims to replicate the main features and design of the Disney+ platform.",
    modalContent: (
      <>
        <p>
          My objective with this project was to replicate the Disney+ landing page as accurate as possible using my knowledge of HTML, CSS, JSS and responsiveness.
        </p>
      </>
    ),
  },
  {
    title: "My Portfolio",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
