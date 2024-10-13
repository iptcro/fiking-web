import "@/app/styles/styles_comp.css";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TablerIcon } from "@tabler/icons-react";
import StaticIcon from "./Icon";

export const ButtonPrimary = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Button className="btn btn-primary">
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </Button>
  );
};

// TODO ovo vjj ne trebaju bit dvije razlicite komp nego jedna s parametrom

export const ButtonSecondary = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <Button className="btn btn-secondary">
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </Button>
  );
};

interface IconButtonProps {
  icon: TablerIcon;
  url?: string;
  iconSize?: number;
  iconClassName?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  iconSize = 32,
  iconClassName = "",
}) => {
  return (
    <div className="icon-holder-btn">
      <StaticIcon icon={Icon} size={iconSize} className={iconClassName} />
    </div>
  );
};

export const IconLink: React.FC<IconButtonProps> = ({
  icon: Icon,
  url = "",
  iconSize = 32,
  iconClassName = "social-icon-button",
}) => {
  return (
    <a
      className="icon-holder-btn"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StaticIcon icon={Icon} size={iconSize} className={iconClassName} />
    </a>
  );
};