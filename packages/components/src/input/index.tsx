// packages/components/src/Input/Input.tsx
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // 라벨 텍스트
  errorMessage?: string; // 에러 메시지
}

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  ...props
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" {...props} />
      {errorMessage && <p className="input-error">{errorMessage}</p>}
    </div>
  );
};

export default Input;
