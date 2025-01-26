import SectionHeading from "../UI/SectionHeading";
import styles from "@/styles/projects.module.css";
import airCallingFront from "@/assets/airCalling-front.png";
import airCallingBack from "@/assets/airCalling-back.png";
import businessFront from "@/assets/business-front.png";
import businessBack from "@/assets/business-back.png";
import ecomFront from "@/assets/ecom-front.png";
import ecomBack from "@/assets/ecom-back.png";
import Image from "next/image";
import Container from "../Container";

export default function Projects() {
  return (
    <section style={{ marginTop: "139px" }}>
      <Container>
        <SectionHeading
          title="My Projects"
          subTitle="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        />

        <div className={styles.buttonContainer}>
          <button className={styles.tabButton}>All</button>
          <button className={styles.tabButton}>UI/UX</button>
          <button className={styles.tabButton}>Web Design</button>
          <button className={styles.tabButton}>App Design</button>
          <button className={styles.tabButton}>Graphic Design</button>
        </div>

        {/* Project card */}
        <div className={styles.projectContainer}>
          {/* Air Calling Project */}
          <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={airCallingFront}
                alt="Air Calling Project landing page"
                className={styles.frontImage}
              />
              <Image
                src={airCallingBack}
                alt="Air Calling Project landing page"
                className={styles.backImage}
              />
            </div>
            <div>
              <p className={styles.projectCat}>Web Design</p>
              <p className={styles.projectTitle}>
                AirCalling Landing Page Design
              </p>
            </div>
          </div>

          {/* Business Project */}
          <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={businessFront}
                alt="Business Project landing page"
                className={styles.frontImage}
              />
              <Image
                src={businessBack}
                alt="Business Project landing page"
                className={styles.backImage}
              />
            </div>
            <div>
              <p className={styles.projectCat}>Web Design</p>
              <p className={styles.projectTitle}>
                Business Landing Page Design
              </p>
            </div>
          </div>

          {/* E-commerce project */}
          <div className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <Image
                src={ecomFront}
                alt="E-com Project landing page"
                className={styles.frontImage}
              />
              <Image
                src={ecomBack}
                alt="E-com Project landing page"
                className={styles.backImage}
              />
            </div>
            <div>
              <p className={styles.projectCat}>Web Design</p>
              <p className={styles.projectTitle}>Ecom Web Page Design</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
