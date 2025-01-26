import Image from "next/image";
import facebookIcon from "@/assets/icon/Facebook.svg";
import twitterIcon from "@/assets/icon/Twitter.svg";
import instagramIcon from "@/assets/icon/Instagram.svg";
import linkedinIcon from "@/assets/icon/LinkedIn.svg";

export default function SocialIcons() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        gap: "25px",
        marginTop: "35px",
      }}
    >
      <a href="#">
        <Image
          src={facebookIcon}
          alt="facebook icon"
          width={33}
          height={33}
          className="socialIcon"
        />
      </a>
      <a href="#">
        <Image
          src={twitterIcon}
          alt="twitter icon"
          width={33}
          height={33}
          className="socialIcon"
        />
      </a>
      <a href="#">
        <Image
          src={instagramIcon}
          alt="instagram icon"
          width={33}
          height={33}
          className="socialIcon"
        />
      </a>
      <a href="#">
        <Image
          src={linkedinIcon}
          alt="linkedin icon"
          width={33}
          height={33}
          className="socialIcon"
        />
      </a>
    </div>
  );
}
