import { IconBrandGmail, IconBrandInstagram, IconBrandFacebook, IconBrandDiscord } from "@tabler/icons-react";
import { IconButton } from "./buttons";
import { FikingLogoWhite } from "./logo";

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
            Sjedište i to sve? Ili, recimo, još neki dodatak (udruga studenata
            fizike bla)
          </p>
        </div>
      </div>
      <div className="footer-contact">
        <a>kontakt@fiking.hr</a>
        <div className="social-buttons">
          <IconButton
            icon={IconBrandDiscord}
            url="https://twitter.com"
            size={32}
            ariaLabel="Twitter"
          />
          <IconButton
            icon={IconBrandGmail}
            url="https://twitter.com"
            size={32}
            ariaLabel="Twitter"
          />
          <IconButton
            icon={IconBrandInstagram}
            url="https://twitter.com"
            size={32}
            ariaLabel="Twitter"
          />
          <IconButton
            icon={IconBrandFacebook}
            url="https://twitter.com"
            size={32}
            ariaLabel="Twitter"
          />
        </div>
      </div>
    </div>
  );
}
