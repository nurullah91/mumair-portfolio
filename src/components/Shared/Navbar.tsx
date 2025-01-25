import Image from "next/image";
import Container from "../Container";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <Container>
        <div>
          <Image src={logo} alt="logo" />
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contacts</li>
          </ul>
          <div>
            <button>
              <a href="#">Download CV</a>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
