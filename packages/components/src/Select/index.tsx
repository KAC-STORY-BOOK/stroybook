import React, { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  disabled = false,
  ...props
}) => {
  return (
    <select {...props} disabled={disabled}>
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
