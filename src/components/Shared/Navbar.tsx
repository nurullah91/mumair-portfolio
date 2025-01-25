import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/logo.png";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav style={{ marginTop: "60px" }}>
      <Container>
        <div className={styles.navContainer}>
          <Image src={logo} alt="logo" style={{ width: "280px" }} />
          <div className={styles.navSecondContainer}>
            <div className={styles.navItemContainer}>
              <Link href={"/"} className={styles.navItem}>
                Home
              </Link>
              <Link href={"/"} className={styles.navItem}>
                About Me
              </Link>
              <Link href={"/"} className={styles.navItem}>
                Services
              </Link>
              <Link href={"/"} className={styles.navItem}>
                Projects
              </Link>
              <Link href={"/"} className={styles.navItem}>
                Testimonials
              </Link>
              <Link href={"/"} className={styles.navItem}>
                Contacts
              </Link>
            </div>
            <div>
              <button className="primaryBtn">
                <a href="#" style={{ color: "#FFFFFF", fontSize: "21px" }}>
                  Download CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
