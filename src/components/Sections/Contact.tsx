import Container from "../Container";
import SectionHeading from "../UI/SectionHeading";
import styles from "@/styles/contact.module.css";
export default function Contact() {
  return (
    <section style={{ marginTop: "139px" }}>
      <Container>
        <SectionHeading
          title="Lets Design Together"
          subTitle="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
        />

        <div>
          <form className={styles.contactForm}>
            <input
              type="email"
              className={styles.emailInput}
              placeholder="Enter Your Email"
            />
            <button type="submit" className={`primaryBtn ${styles.contactBtn}`}>
              Contact Me
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
