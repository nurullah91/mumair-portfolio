import Image from "next/image";
import Container from "../Container";
import person from "@/assets/Group 7.png";
import SectionHeading from "../UI/SectionHeading";
export default function About() {
  return (
    <section>
      <Container>
        <div>
          <div>
            <Image src={person} alt="Person with wow reaction" />
          </div>

          <div>
            <SectionHeading
              title="About Me"
              subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"
              alignment="left"
            />

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
