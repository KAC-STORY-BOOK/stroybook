import React from "react";
import "./Callouts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface CalloutsProps {
  type: "outline" | "normal" | "info" | "danger" | "warning";
  title?: string;
  description: string;
  width?: number;
  icon?: IconDefinition;
}

const Callouts: React.FC<CalloutsProps> = ({
  title,
  description,
  width = 400,
  icon,
  type = "normal",
}) => {
  return (
    <div className={`callout_wrap ${type}`} style={{ width: width + "px" }}>
      <div>
        {icon && <FontAwesomeIcon icon={icon} className="icon" />}
        <b>{title}</b>
        &nbsp;
        {description}
      </div>
      <FontAwesomeIcon icon={faChevronRight} className={`callouts_icon`} />
    </div>
  );
};

export default Callouts;
