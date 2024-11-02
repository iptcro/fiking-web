import { TablerIcon } from "@tabler/icons-react";
// import "@/app/styles/styles_comp.css";
import styles from "@/app/styles/icon_styles.module.css";

interface StaticIconProps {
  icon: TablerIcon;
  size?: number;
  color?: string;
  className?: string;
}

export const StaticIcon: React.FC<StaticIconProps> = ({
  icon: Icon,
  size = 24,
  color = "var(--perfect-white)",
  className = "",
}) => {
  return (
    <Icon
      size={size}
      stroke={2}
      color={color}
      className={styles["static-icon"] + className}
    />
  );
};

export default StaticIcon;
