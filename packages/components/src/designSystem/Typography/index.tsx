import React, { HTMLAttributes } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "primary" | "secondary" | "error" | "success" | "warning" | "default";
  align?: "left" | "center" | "right";
  bold?: boolean;
  italic?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "default",
  align = "left",
  bold = false,
  italic = false,
  children,
  ...props
}) => {
  const Component = variant;
  const style: React.CSSProperties = {
    color: getColor(color),
    textAlign: align,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
  };

  return (
    <Component style={style} {...props}>
      {children}
    </Component>
  );
};

const getColor = (color: TypographyProps["color"]): string => {
  switch (color) {
    case "primary":
      return "#007bff";
    case "secondary":
      return "#6c757d";
    case "error":
      return "#dc3545";
    case "success":
      return "#28a745";
    case "warning":
      return "#ffc107";
    case "default":
    default:
      return "#212529";
  }
};

Typography.displayName = "Typography";

export default Typography;
