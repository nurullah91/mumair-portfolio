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
                <p>UX</p>
              </div>
              <div></div>
              <div>
                <p>Website Design</p>
              </div>
              <div></div>
              <div>
                <p>App Design</p>
              </div>
              <div></div>
              <div>
                <p>Graphic Design</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
