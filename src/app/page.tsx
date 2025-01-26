import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Intro from "@/components/Sections/Intro";
import Projects from "@/components/Sections/Projects";
import Service from "@/components/Sections/Service";
import Footer from "@/components/Shared/Footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
