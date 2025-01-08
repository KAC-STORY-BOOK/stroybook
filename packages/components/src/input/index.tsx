// packages/components/src/Input/Input.tsx
import React, { InputHTMLAttributes } from "react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: boolean; // 에러 메시지
  inputSize?: "small" | "medium" | "large"; // Input 크기
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  errorMessage = false,
  inputSize = "medium",
  onChange,
  onBlur,
  onFocus,
  placeholder,
  ...props
}) => {
  const sizeClass = `input-${inputSize}`;
  const error = errorMessage ? "input-error" : "";
  return (
    <div className="input-container">
      <input
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        className={`input-field ${sizeClass} ${error}`}
        {...props}
      />
    </div>
  );
};

export default Input;
