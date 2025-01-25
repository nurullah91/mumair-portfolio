import Image from "next/image";
import SectionHeading from "../UI/SectionHeading";
import uiIcon from "@/assets/icon/ui-icon.svg";
import webIcon from "@/assets/icon/web-icon.svg";
import appIcon from "@/assets/icon/app-icon.svg";
import graphicIcon from "@/assets/icon/graphic-icon.svg";
import Container from "../Container";

export default function Service() {
  return (
    <section>
      <Container>
        <SectionHeading
          title="Service"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />

        <div>
          <div>
            <Image src={uiIcon} alt="icon of UI/UX" />
            <h4>UI/UX</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div>
            <Image src={webIcon} alt="icon of UI/UX" />
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div>
            <Image src={appIcon} alt="icon of UI/UX" />
            <h4>App Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum
            </p>
          </div>
          <div>
            <Image src={graphicIcon} alt="icon of UI/UX" />
            <h4>Graphic Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdumLorem
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
