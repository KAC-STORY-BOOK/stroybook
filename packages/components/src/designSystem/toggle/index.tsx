import React, { useState } from "react";
import "./Toggle.css";
export interface ToggleProps {
  label?: string; // 토글 옆에 표시될 라벨 텍스트
  defaultChecked?: boolean; // 초기 상태 (on/off)
  onChange?: (checked: boolean) => void; // 상태 변경 핸들러
  disabled?: boolean; // 비활성화 여부
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  defaultChecked = false,
  onChange,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked); // 상태 변경 핸들러 호출
  };

  return (
    <div className={`toggle-container ${disabled ? "disabled" : ""}`}>
      <div
        className={`toggle ${checked ? "checked" : ""}`}
        onClick={handleToggle}
      >
        <div className="toggle-thumb" />
      </div>
      {label && <span className="toggle-label">{label}</span>}
    </div>
  );
};

export default Toggle;
