import "./styles_comp.css";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TablerIcon } from "@tabler/icons-react";

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

// ICON BUTTONS (for social media)

interface IconButtonProps {
  icon: TablerIcon;
  url: string;
  size?: number;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  ariaLabel?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  url,
  size = 24,
  color = "var(--perfect-white)",
  bgColor = "var(--fiking-darkest)",
  hoverColor = "#e0e0e0",
  ariaLabel = "Social media icon button",
}) => {
  return (
      <a
            href={url}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            <Icon size={size} stroke={2} color={color} className="icon" />
          </a>
    
  );
};
