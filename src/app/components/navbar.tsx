import "./styles_comp.css";
import * as React from "react";
import { Button } from "@mui/base/Button";
import FikingLogo from "./logo";

export default function Navbar() {
  return (
    <div className="top-bar">
      <div className="nav-bar">
        <div>
          <a>
            <FikingLogo />
          </a>
        </div>
        <Button className="nav-bar-item">O nama</Button>
        <Button className="nav-bar-item">Raspored</Button>
        <Button className="nav-bar-item">Prošla natjecanja</Button>
        <Button className="nav-bar-item accent">Javi nam se!</Button>
      </div>
    </div>
  );
}
