"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menu from "@/assets/icon/hambargermenu.svg";
import cross from "@/assets/icon/cross.svg";

export default function NavMenu() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setShow(!show)} className="menuButton">
        <Image
          src={show ? cross : menu}
          alt={`${show ? "Close" : "Menu"}`}
          width={30}
          height={30}
          style={{ width: "30px", height: "30px" }}
        />
      </button>

      <div className={`${show ? "navItemContainer" : "navItemHidden"}`}>
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
    </div>
  );
}
