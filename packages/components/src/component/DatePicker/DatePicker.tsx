import { DatePicker, DatePickerProps } from "antd";
import React from "react";
export interface DatePickerStoryProps {
  picker?: "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
  showTime?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
}

const StoryDatePicker: React.FC<DatePickerStoryProps> = ({
  picker,
  format,
  size,
  showTime = false,
  allowClear = false,
  disabled = false,
}) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <DatePicker
        onChange={onChange}
        picker={picker}
        format={format}
        size={size}
        showTime={showTime}
        allowClear={allowClear}
        disabled={disabled}
      />
    </div>
  );
};

export default StoryDatePicker;
