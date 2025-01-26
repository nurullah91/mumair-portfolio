import Image from "next/image";
import SectionHeading from "../UI/SectionHeading";
import uiIcon from "@/assets/icon/ui-icon.svg";
import webIcon from "@/assets/icon/web-icon.svg";
import appIcon from "@/assets/icon/app-icon.svg";
import graphicIcon from "@/assets/icon/graphic-icon.svg";
import Container from "../Container";
import styles from "@/styles/service.module.css";
export default function Service() {
  return (
    <section style={{ marginTop: "139px" }}>
      <Container>
        <SectionHeading
          title="Service"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />

        <div className={styles.serviceContainer}>
          <div className={styles.serviceBox}>
            <Image
              src={uiIcon}
              alt="icon of UI/UX"
              className={styles.serviceIcon}
            />
            <h2 className={styles.serviceTitle}>UI/UX</h2>
            <p className={styles.serviceDetails}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image
              src={webIcon}
              alt="icon of Web Design"
              className={styles.serviceIcon}
            />
            <h2 className={styles.serviceTitle}>Web Design</h2>
            <p className={styles.serviceDetails}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image
              src={appIcon}
              alt="icon of App Design"
              className={styles.serviceIcon}
            />
            <h2 className={styles.serviceTitle}>App Design</h2>
            <p className={styles.serviceDetails}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div className={styles.serviceBox}>
            <Image
              src={graphicIcon}
              alt="icon of graphic icon"
              className={styles.serviceIcon}
            />
            <h2 className={styles.serviceTitle}>Graphic Design</h2>
            <p className={styles.serviceDetails}>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdumLorem
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
