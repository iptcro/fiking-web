import { IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook, IconBrandDiscord } from "@tabler/icons-react";
import { IconLink } from "./buttons";
import { FikingLogoWhite } from "./logo";
import "./styles_comp.css";

export default function Footer() {
  return (
    <div className="footer color">
      <div className="footer-info">
        <a>
          <FikingLogoWhite />
        </a>
        <div>
          <h2 className="color">Studentska udruga Fiking</h2>
          <p>
            Ovdje ide neki opisić ispod imena udruge
          </p>
        </div>
      </div>
      <div className="footer-contact">
        <a>kontakt@fiking.hr</a>
        <div className="social-buttons">
          <IconLink
            icon={IconBrandDiscord}
            url="https://discord.com/"
            iconSize={32}
          />
          <IconLink
            icon={IconBrandLinkedin}
            url="https://discord.com/"
            iconSize={32}
          />
          <IconLink
            icon={IconBrandInstagram}
            url="https://discord.com/"
            iconSize={32}
          />
          <IconLink
            icon={IconBrandFacebook}
            url="https://discord.com/"
            iconSize={32}
          />
        </div>
      </div>
    </div>
  );
}
