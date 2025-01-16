import React from "react";
import "./Callouts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClose,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export interface CalloutsProps {
  type: "outline" | "normal" | "info" | "danger" | "warning";
  title?: string;
  description: string;
  width?: number;
  icon?: IconDefinition;
  onClick?: () => void;
  actionIcon?: "close" | "link";
}

const Callouts: React.FC<CalloutsProps> = ({
  title,
  description,
  width = 400,
  icon,
  type = "normal",
  onClick,
  actionIcon,
}) => {
  return (
    <div
      className={`callout_wrap ${type}`}
      style={{ width: width + "px" }}
      onClick={onClick}
    >
      <div>
        {icon && <FontAwesomeIcon icon={icon} className="icon" />}
        <b>{title}</b>
        &nbsp;
        {description}
      </div>
      {actionIcon && (
        <FontAwesomeIcon
          icon={actionIcon === "close" ? faClose : faChevronRight}
          className={`callouts_icon`}
        />
      )}
    </div>
  );
};

export default Callouts;
