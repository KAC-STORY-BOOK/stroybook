import React, { HTMLAttributes, useState } from "react";
import "./Confirm.css";
import { Button } from "../../index";

export interface ConfirmProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({
  title,
  message,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  onCancel,
  className,
  ...props
}) => {
  return (
    <div className={`confirm_modal ${className}`} {...props}>
      {title && <h2 className="confirm_title">{title}</h2>}
      {message && <p className="confirm_message">{message}</p>}
      <div className="confirm_buttons">
        <Button
          variant="primary"
          size="large"
          onClick={onConfirm}
          className="confirm_button"
        >
          {confirmText}
        </Button>
        <Button
          variant="secondary"
          size="large"
          onClick={onCancel}
          className="cancel_button"
        >
          {cancelText}
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
