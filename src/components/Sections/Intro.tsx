import Image from "next/image";
import person from "@/assets/Group 2.png";
import Container from "../Container";
import styles from "@/styles/intro.module.css";
import SocialIcons from "../UI/SocialIcons";

export default function Intro() {
  return (
    <section style={{ marginTop: "120px" }}>
      <Container>
        <div className={styles.contentContainer}>
          <div>
            <p className={styles.hi}>Hi I am</p>
            <p className={styles.name}>Muhammad Umair</p>

            <h1 className={styles.firstTitle}>UI & UX</h1>
            <h1 className={styles.secondTitle}>Designer</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>

            <button
              className="primaryBtn"
              style={{ width: "188px", marginTop: "22px", fontSize: "21px" }}
            >
              <a href="#" style={{ color: "#FFFFFF" }}>
                Hire me
              </a>
            </button>
          </div>
          <div className={styles.imgContainer}>
            <Image src={person} alt="Person" className={styles.introImg} />
            <SocialIcons />
          </div>
        </div>
      </Container>
    </section>
  );
}
