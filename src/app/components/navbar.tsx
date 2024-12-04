import * as React from "react";
import "@/app/styles/styles_comp.css";
import { Button } from "@mui/base/Button";
import { FikingLogo } from "./logo";
import { IconMenu2 } from "@tabler/icons-react";
import StaticIcon from "./Icon";

export default function Navbar() {
  return (
    <div className="top-bar">
      <div className="nav-bar">
        <div>
          <a>
            <FikingLogo />
          </a>
        </div>
        {/* <Button className="nav-bar-item">O nama</Button>
        <Button className="nav-bar-item">Raspored</Button>
        <Button className="nav-bar-item">Prošla natjecanja</Button> */}
        <a href="#howToJoin"><Button className="nav-bar-item accent">
          Javi nam se!
        </Button></a>
      </div>
      {/*Umjesto restiliziranja ovog mozda drawer iz MUI?*/ }
      <div className="nav-menu-button">
        <StaticIcon icon={IconMenu2} size={32} />
      </div>
    </div>
  );
}
