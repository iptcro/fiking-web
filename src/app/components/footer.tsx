"use client";
import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import { IconLink } from "./buttons";
import { FikingLogoWhite } from "./logo";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import "@/app/styles/styles_comp.css";

export default function Footer() {
  const pathname = usePathname();
  const isConference = pathname === "/conference";

  return (
    <div className={classNames("footer", "color", { "conference-theme": isConference })}>
      <div className="footer-info">
        <a>
          <FikingLogoWhite width={50} />
        </a>
        <div>
          <h2 className="color">Studentska udruga Fiking</h2>
          <p>
            Javi se i postani dio natjecateljskog tima!
          </p>
        </div>
      </div>
      <div className="footer-contact">
        {/* <a href="mailto:info@fiking.hr">info@fiking.hr</a> */}
        <div className="social-buttons">
          {/* <IconLink
            icon={IconBrandDiscord}
            url="https://discord.com/"
            iconSize={32}
          /> */}
          {/* <IconLink
            icon={IconBrandLinkedin}
            url="https://discord.com/"
            iconSize={32}
          /> */}
          <IconLink
            icon={IconBrandInstagram}
            url="https://www.instagram.com/iptcroatia/"
            iconSize={32}
          />
          <IconLink
            icon={IconMail}
            url="mailto:info@fiking.hr"
            iconSize={32}
          />
          {/* <IconLink
            icon={IconBrandFacebook}
            url="https://discord.com/"
            iconSize={32}
          /> */}
        </div>
      </div>
    </div>
  );
}
