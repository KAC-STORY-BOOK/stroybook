import { DatePicker, DatePickerProps } from "antd";
import React from "react";
export interface DatePickerStoryProps {
  picker?: "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
}

const StoryDatePicker: React.FC<DatePickerStoryProps> = ({
  picker,
  format = "YYYY-MM-DD",
  size,
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
      />
    </div>
  );
};

export default StoryDatePicker;
