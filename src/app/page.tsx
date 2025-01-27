import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Intro from "@/components/Sections/Intro";
import Projects from "@/components/Sections/Projects";
import Service from "@/components/Sections/Service";
import Testimonial from "@/components/Sections/Testimonial";
import Footer from "@/components/Shared/Footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Service />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
