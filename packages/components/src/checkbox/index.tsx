import React, { InputHTMLAttributes } from "react";
import "./checkbox.css";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; // 체크박스 옆에 표시될 라벨 텍스트
  disabled?: boolean; // 비활성화 여부
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled,
  ...props
}) => {
  return (
    <div className="checkbox-container">
      <label className={`checkbox-label ${disabled ? "disabled" : ""}`}>
        <input
          type="checkbox"
          className="checkbox-input"
          disabled={disabled}
          {...props}
        />
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
