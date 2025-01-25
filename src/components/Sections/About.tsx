import Image from "next/image";
import Container from "../Container";
import person from "@/assets/Group 7.png";
import styles from "@/styles/about.module.css";

export default function About() {
  return (
    <section style={{ marginTop: "70px" }}>
      <Container>
        <div className={styles.contentContainer}>
          <div className={styles.imgContainer}>
            <Image
              src={person}
              alt="Person with wow reaction"
              className={styles.aboutImg}
            />
          </div>

          <div>
            <div className={styles.content}>
              <h1 className={styles.title}>About Me</h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium.
                Turpis tempus pharetra
              </p>
            </div>

            <div>
              <div>
                <p className="skillsName">UX</p>

                <div className={styles.lineContainer}>
                  <div className={styles.uxOrangeLine} />
                  <div className={styles.whiteLine} />
                </div>
              </div>

              <div>
                <p className="skillsName">Website Design</p>

                <div className={styles.lineContainer}>
                  <div className={styles.webOrangeLine} />
                  <div className={styles.whiteLine} />
                </div>
              </div>

              <div>
                <p className="skillsName">App Design</p>
                <div className={styles.lineContainer}>
                  <div className={styles.appOrangeLine} />
                  <div className={styles.whiteLine} />
                </div>
              </div>

              <div>
                <p className="skillsName">Graphic Design</p>
                <div className={styles.lineContainer}>
                  <div className={styles.graphicOrangeLine} />
                  <div className={styles.whiteLine} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
