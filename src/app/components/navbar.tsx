"use client";
import * as React from "react";
import styles from "@/app/styles/navbar_styles.module.css";
import { Button } from "@mui/base/Button";
import { FikingLogo } from "./logo";
import { IconMenu2, IconChevronDown } from "@tabler/icons-react";
import StaticIcon from "./Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link href="/">
        <Button className={styles["nav-bar-item"]}>Fiking</Button>
      </Link>
      <div className={styles["dropdown-wrapper"]}>
        <Link href="/about" onClick={closeMenu}>
          <Button className={styles["nav-bar-item"]}>
            O nama 
            <IconChevronDown 
              size={18} 
              className={styles["chevron"]} 
              color="black" 
            />
          </Button>
        </Link>
        <div className={styles["dropdown-content"]}>
          <Link href="/support" onClick={closeMenu}>
            <Button className={styles["nav-bar-item"]}>Podrži nas</Button>
          </Link>
        </div>
      </div>
      <Link href="/conference">
        <Button className={styles["nav-bar-item"]}>IPT Conference</Button>
      </Link>
      <Link href="/integration_bee">
        <Button className={styles["nav-bar-item"]}>Integrijada</Button>
      </Link>
      {pathname === "/" && (
        <Link href="#howToJoin">
          <Button
            className={classNames(styles["nav-bar-item"], styles["accent"])}
          >
            Javi nam se!
          </Button>
        </Link>
      )}
    </>
  );

  return (
    <div className={styles["top-bar"]}>
      <div className={styles["nav-bar"]}>
        {!menuOpen && (
          <Link href="/">
            <FikingLogo />
          </Link>
        )}

        <div className={styles["nav-links"]}>{navLinks}</div>

        <div className={styles["nav-menu-button"]} onClick={toggleMenu}>
          <StaticIcon icon={IconMenu2} size={32} />
        </div>
      </div>

      {menuOpen && (
        <div className={styles["mobile-dropdown"]}>
          {navLinks}
        </div>
      )}
    </div>
  );
}
