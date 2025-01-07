import React, { InputHTMLAttributes } from "react";
export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export const Radio: React.FC<RadioProps> = ({
  options,
  name,
  defaultValue,
  onChange,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div {...props}>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            defaultChecked={defaultValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
Radio.displayName = "Radio";
export default Radio;
