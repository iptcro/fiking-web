import "./styles_comp.css";
import * as React from "react";
import { Button } from "@mui/base/Button";

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
