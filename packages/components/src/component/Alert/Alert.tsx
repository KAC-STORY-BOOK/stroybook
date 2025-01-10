import React, { HTMLAttributes, useState } from "react";
import "./Alert.css";
import { Button } from "../../index";
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  content: string;
  buttonText?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  content,
  buttonText = "확인",
  onClose,
}) => {
  return (
    <>
      <div className="alert_wrap">
        <p>{content}</p>
        <Button variant="primary" size="medium" onClick={onClose}>
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default Alert;
