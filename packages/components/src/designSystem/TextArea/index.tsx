import React, { TextareaHTMLAttributes } from "react";
import "./TextArea.css";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMessage?: boolean; // 에러 메시지
  size?: "small" | "medium" | "large"; // Textarea 크기
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  errorMessage = false,
  size = "medium",
  onChange,
  onBlur,
  onFocus,
  className,
  placeholder,
  ...props
}) => {
  const sizeClass = `textarea-${size}`;
  const error = errorMessage ? "textarea-error" : "";
  const combinedClassName = `${
    className || ""
  } textarea-field ${sizeClass} ${error}`.trim();

  return (
    <div className="textarea-container">
      <textarea
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        className={combinedClassName}
        {...props}
      />
    </div>
  );
};

export default Textarea;
