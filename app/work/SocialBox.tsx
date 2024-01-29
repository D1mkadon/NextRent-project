import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  Instagram,
  Github,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger);
import Link from "next/link";

const SocialBox = (): JSX.Element => {
  useGSAP(() => {
    gsap.from(".SocialsAnimation", {
      scrollTrigger: {
        trigger: ".SocialsAnimation",
        start: "top 80%",
      },
      scale: 0,
      duration: 1,
      ease: "power1.inOut",
      yoyo: true,
      stagger: { each: 0.2 },
    });
  }, {});
  return (
    <div className="w-[100%] flex flex-wrap gap-6 md:gap-12 justify-center ">
      <Link
        className="SocialsAnimation"
        href="https://github.com/D1mkadon"
        target="_blanked"
      >
        <Github width={50} height={50} />
      </Link>

      <Link
        className="SocialsAnimation"
        href={"https://www.linkedin.com/in/dmytro-tarasenko/"}
        target="_blanked"
      >
        <Linkedin width={50} height={50} />
      </Link>
      <Link
        className="SocialsAnimation"
        href={"https://www.instagram.com/"}
        target="_blanked"
      >
        <Instagram width={50} height={50} />
      </Link>
      <Link
        className="SocialsAnimation"
        href={"https://www.facebook.com/"}
        target="_blanked"
      >
        <Facebook width={50} height={50} />
      </Link>
      <Link
        className="SocialsAnimation"
        href={"https://www.youtube.com/"}
        target="_blanked"
      >
        <Youtube width={50} height={50} />
      </Link>
      <Link
        className="SocialsAnimation"
        href={"https://twitter.com/"}
        target="_blanked"
      >
        <Twitter width={50} height={50} />
      </Link>
    </div>
  );
};

export default SocialBox;
