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
    imgSrc: "project-imgs/AnimeRoll-project.png",
    code: "https://github.com/douglas-yokomizo/animeroll",
    projectLink: "https://animeroll-page.vercel.app/",
    tech: ["Bootstrap", "HTML5", "CSS3"],
    description:
      "A simple anime stream service concept built using Bootstrap.",
    modalContent: (
      <>
        <p>
          AnimeRoll is a landing page for a platfotm dedicated to anime and manga enthusiasts, providing a collection of popular anime shows, manga series, and games. The website features a user-friendly interface and various sections to explore different content.
        </p>
        <p>
          The AnimeRoll website was built using HTML, CSS, and JavaScript. It utilizes the Bootstrap framework for responsive design and interactivity.
        </p>
      </>
    ),
  },
  {
    title: "Too Yeah",
    imgSrc: "project-imgs/TooYeah-project.png",
    code: "https://github.com/douglas-yokomizo/too-yeah",
    projectLink: "https://too-yeah.vercel.app/",
    tech: ["JavaScript", "HTML5", "CSS3"],
    description:
      "A landing page I built for a restaurant.",
    modalContent: (
      <>
        <p>
          I made this project so the restaurant could show it&apos;s menu and provide information about the restaurant.
        </p>
        <p>
          The project was built using HTML, CSS, and vanilla JavaScript to add animations and interactivity.
        </p>
      </>
    ),
  },
  {
    title: "Clone Disney+",
    imgSrc: "project-imgs/Disney-project.png",
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
    imgSrc: "project-imgs/MyPortfolio-project.png",
    code: "https://github.com/douglas-yokomizo/my-portfolio",
    projectLink: "https://my-portfolio-liard-one.vercel.app/",
    tech: ["React", "NextJS", "SaSS", "AnimeJS", "Framer Motion"],
    description:
      "This is the latest project I worked on and I'm really proud of the result.",
    modalContent: (
      <>
        <p>
          One of the projects I&apos;m most proud of. It showcases my skills and experience as a web developer.</p>
        <p>
          I built it using NextJS, a framework that allows me to create fast and SEO-friendly websites with React. To add some interactivity and animation to my website, I used AnimeJS and framer motion, two libraries that make it easy to create smooth and realistic animations with JavaScript.
        </p>
        <p>
          My portfolio website is responsive, accessible and modern, and I think it reflects my personality and passion for web development.
        </p>
      </>
    ),
  },
];
