"use client";
import * as React from "react";
import navbar from "@/app/styles/navbar_styles.module.css";
import { Button } from "@mui/base/Button";
import { FikingLogo } from "./logo";
import { IconMenu2 } from "@tabler/icons-react";
import StaticIcon from "./Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className={navbar["top-bar"]}>
      <div className={navbar["nav-bar"]}>
        <Link href="/">
          <FikingLogo />
        </Link>
        <Link href="/home">
          <Button className={navbar["nav-bar-item"]}>Fiking</Button>
        </Link>
        <Link href="/about">
          <Button className={navbar["nav-bar-item"]}>O nama</Button>
        </Link>
        <Link href="/conference">
          <Button className={navbar["nav-bar-item"]}>IPT Conference</Button>
        </Link>
        {/*<Button className="nav-bar-item">Raspored</Button>
        <Button className="nav-bar-item">Prošla natjecanja</Button> */}
        {pathname == "/" && (
          <Link href="#howToJoin">
            <Button
              className={classNames(navbar["nav-bar-item"], navbar["accent"])}
            >
              Javi nam se!
            </Button>
          </Link>
        )}
      </div>
      {/*Umjesto restiliziranja ovog mozda drawer iz MUI?*/}
      <div className={navbar["nav-menu-button"]}>
        <StaticIcon icon={IconMenu2} size={32} />
      </div>
    </div>
  );
}
