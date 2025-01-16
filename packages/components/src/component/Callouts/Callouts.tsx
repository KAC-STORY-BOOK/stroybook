import React from "react";
import "./Callouts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  type = "normal",
}) => {
  return (
    <div className={`callout_wrap ${type}`} style={{ width: width + "px" }}>
      <div>
        <b>{title}</b>
        &nbsp;
        {description}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className={`callouts_icon`} />
    </div>
  );
};

export default Callouts;
