import { DatePicker, DatePickerProps } from "antd";
import React from "react";
export interface DatePickerStoryProps {
  picker?: "week" | "month" | "quarter" | "year";
}

const StoryDatePicker: React.FC<DatePickerStoryProps> = ({ picker }) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
};

export default StoryDatePicker;
