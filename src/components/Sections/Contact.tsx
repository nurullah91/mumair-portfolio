import Container from "../Container";
import SectionHeading from "../UI/SectionHeading";

export default function Contact() {
  return (
    <section>
      <Container>
        <SectionHeading
          title="Lets Design Together"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />

        <div>
          <form>
            <input type="email" />
            <button type="submit">Contact Me</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
