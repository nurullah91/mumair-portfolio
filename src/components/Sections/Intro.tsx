import Image from "next/image";
import person from "@/assets/Group 2.png";
import Container from "../Container";
export default function Intro() {
  return (
    <section>
      <Container>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <p>
              Hi I am
              <br />
              <span>Muhammad Umair</span>
            </p>

            <h1>UI & UX</h1>
            <h1>Designer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>

            <button>
              <a href="#">Hire me</a>
            </button>
          </div>
          <div>
            <Image src={person} alt="Person" />
          </div>
        </div>
      </Container>
    </section>
  );
}
