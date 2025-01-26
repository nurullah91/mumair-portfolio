import Image from "next/image";
import logo from "@/assets/logo.png";
import styles from "@/styles/footer.module.css";
import SocialIcons from "../UI/SocialIcons";
import NavMenu from "../UI/NavMenu";
export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <Image src={logo} alt="Logo" />
        <div className={styles.navSecondContainer}>
          <NavMenu />
        </div>

        <SocialIcons />
      </div>
      {/* Copyright text*/}
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>
          © 2023 <span className={styles.name}>Mumair</span> All Rights Reserved
          , Inc.
        </p>
      </div>
    </footer>
  );
}
