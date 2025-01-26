import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="navItemContainer">
      <Link href={"/"} className="navItem">
        Home
      </Link>
      <Link href={"/"} className="navItem">
        About Me
      </Link>
      <Link href={"/"} className="navItem">
        Services
      </Link>
      <Link href={"/"} className="navItem">
        Projects
      </Link>
      <Link href={"/"} className="navItem">
        Testimonials
      </Link>
      <Link href={"/"} className="navItem">
        Contacts
      </Link>
    </div>
  );
}
