import React from "react";
import "./Callouts.css";
import { Typography } from "../../designSystem";

export interface CalloutsProps {
  type: "outline" | "normal" | "info" | "danger" | "warning";
  title?: string;
  description: string;
  width?: number;
}

const Callouts: React.FC<CalloutsProps> = ({
  title,
  description,
  width = 400,
  type,
}) => {
  return (
    <div className={`callout_wrap ${type}`} style={{ width: width + "px" }}>
      <b>{title}</b>
      &nbsp;
      {description}
    </div>
  );
};

export default Callouts;
