import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <Image src={logo} alt="Logo" />
    </footer>
  );
}
