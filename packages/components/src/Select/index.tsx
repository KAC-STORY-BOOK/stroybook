import React, { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "옵션을 선택해 주세요",
  size = "medium",
  ...props
}) => {
  const className = `select select-${size}`;

  return (
    <select className={className} {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

Select.displayName = "Select";

export default Select;
