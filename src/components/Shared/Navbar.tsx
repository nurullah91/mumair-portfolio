import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/logo.png";
import styles from "@/styles/navbar.module.css";
import NavMenu from "../UI/NavMenu";

export default function Navbar() {
  return (
    <nav style={{ marginTop: "60px" }}>
      <Container>
        <div className={styles.navContainer}>
          <Image src={logo} alt="logo" style={{ width: "280px" }} />
          <div className={styles.navSecondContainer}>
            {/* Menu of navbar */}
            <NavMenu />
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
