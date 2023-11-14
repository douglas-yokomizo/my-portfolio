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
    title: "Task Manager",
    imgSrc: "project-imgs/Task-manager.png",
    code: "https://github.com/douglas-yokomizo/minhas-tarefas",
    projectLink: "https://minhas-tarefas-tau.vercel.app/",
    tech: ["Styled-components", "React", "TypeScript", "Redux Toolkit"],
    description:
      "A more complete task manager with state management using Redux Toolkit.",
    modalContent: (
      <>
        <p>
          I made a task manager project using react, typescript, styled-components, react-router and redux-toolkit.
        </p>
        <p>
          The project allows users to create, edit, delete and organize tasks into different categories.
          Users can also filter tasks by status, priority or due date.
        </p>
        <p>
          The project uses react-router to navigate between different views, such as the dashboard, the task list and the task details. The project also uses redux-toolkit to manage the global state of the application, such as the tasks, the categories and the filters.
          The project is styled with styled-components, which allows me to write CSS in JS and use props and themes to customize the appearance of the components.
        </p>
      </>
    ),
  },
  {
    title: "Yokz Restaurant",
    imgSrc: "project-imgs/AnimeRoll-project.png",
    code: "https://github.com/douglas-yokomizo/restaurante-yokomizo",
    projectLink: "https://restaurante-yokz.vercel.app/",
    tech: ["NextJS", "HTML5", "CSS3", "Tailwind", "Firebase", "ContextAPI", "TypeScript"],
    description:
      "A complete restaurant page with firebase integration.",
    modalContent: (
      <>
        <p>
          This project is a Japanese restaurant website developed with Next.js, Tailwind, TypeScript and Firebase. The website contains 7 main pages, which include home, about, menu, cart view, checkout, item detail and contact. Each page has specific functionalities to inform and assist users in choosing dishes and completing orders.
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
    tech: ["React", "NextJS", "SaSS", "AnimeJS", "Framer Motion", "TypeScript"],
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
