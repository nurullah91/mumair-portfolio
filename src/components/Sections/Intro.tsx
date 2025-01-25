import Image from "next/image";
import person from "@/assets/Group 2.png";
import Container from "../Container";
import styles from "@/styles/intro.module.css";
import facebookIcon from "@/assets/icon/Facebook.svg";
import twitterIcon from "@/assets/icon/Twitter.svg";
import instagramIcon from "@/assets/icon/Instagram.svg";
import linkedinIcon from "@/assets/icon/LinkedIn.svg";
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
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                gap: "25px",
                marginTop: "35px",
              }}
            >
              <a href="#">
                <Image
                  src={facebookIcon}
                  alt="facebook icon"
                  width={33}
                  height={33}
                  style={{ width: "33px", height: "33px" }}
                />
              </a>
              <a href="#">
                <Image
                  src={twitterIcon}
                  alt="twitter icon"
                  width={33}
                  height={33}
                  style={{ width: "33px", height: "33px" }}
                />
              </a>
              <a href="#">
                <Image
                  src={instagramIcon}
                  alt="instagram icon"
                  width={33}
                  height={33}
                  style={{ width: "33px", height: "33px" }}
                />
              </a>
              <a href="#">
                <Image
                  src={linkedinIcon}
                  alt="linkedin icon"
                  width={33}
                  height={33}
                  style={{ width: "33px", height: "33px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
