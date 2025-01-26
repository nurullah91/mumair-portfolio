import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Intro from "@/components/Sections/Intro";
import Service from "@/components/Sections/Service";
import Footer from "@/components/Shared/Footer";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}
