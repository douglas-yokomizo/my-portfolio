import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! I&apos;m Douglas, but you can call me Doug. I used to crunch numbers as a financial analyst, but now I'm all about coding websites and apps.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I enjoy cooking up a storm in the kitchen, especially if it&apos;s a burguer or sushi. I also love being outdoors, whether it&apos;s hiking, biking, or kayaking. And of course, I never skip a day at the gym 💪
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for a chance to break into the web development industry and show off my skills. I&apos;m proficient in HTML, CSS, JavaScript, and Python, and I&apos;m always eager to learn new technologies and frameworks.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively seeking new opportunities where I can grow as a developer and work with awesome people. If you think I might be a good fit for your team, don&apos;t hesitate to reach out! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
