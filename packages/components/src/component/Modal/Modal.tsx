import React, { HTMLAttributes, useState } from "react";
import "./Modal.css";
import { Button, Typography } from "../../designSystem/index";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  primaryAction?: { label?: string; onClick: () => void };
  alternativeAction?: { label?: string; onClick: () => void };
  nonpreferred?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  primaryAction = { label: "확인", onClick: () => {} }, // 기본값 설정
  alternativeAction,
  className,
  nonpreferred,
  ...props
}) => {
  return (
    <div className="modal_overlay">
      <div className={`confirm_modal ${className}`} {...props}>
        <Typography bold color="default" variant="h2">
          {title}
        </Typography>
        <Typography color="default" variant="p">
          {description}
        </Typography>
        <div
          className={nonpreferred ? "modal_buttons_nonpre" : "modal_buttons"}
        >
          <Button
            variant="primary"
            size="large"
            className="confirm_button"
            onClick={primaryAction?.onClick}
          >
            {primaryAction?.label}
          </Button>
          {alternativeAction && (
            <Button
              variant="secondary"
              size="large"
              onClick={alternativeAction?.onClick}
              className={
                nonpreferred ? "cancel_button_nonpre" : "cancel_button"
              }
            >
              {alternativeAction.label}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
