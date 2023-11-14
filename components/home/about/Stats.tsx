import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Techs I know</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML5</span>
            <span className="chip">CSS3</span>
            <span className="chip">React</span>
            <span className="chip">SaSS</span>
            <span className="chip">Bootstrap</span>
            <span className="chip">jQuery</span>
            <span className="chip">REST API</span>
            <span className="chip">Figma</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Next</span>
            <span className="chip">VueJS</span>
            <span className="chip">Redux</span>
            <span className="chip">Jest</span>
            <span className="chip">Cypress</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Angular</span>
            <span className="chip">Django</span>
            <span className="chip">Docker</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
