import React from "react";
import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import moment, { Moment } from "moment";
const { RangePicker } = DatePicker;
import "antd/dist/antd.css";

export interface RangePickerStoryProps {
  picker?: "date" | "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
  showTime?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  defaultValue?: [Moment, Moment]; // 시작과 종료 날짜를 다룸
}

const StoryRangeDatePicker: React.FC<RangePickerStoryProps> = ({
  picker,
  format,
  size,
  showTime = false,
  allowClear = true,
  disabled = false,
  defaultValue,
}) => {
  const onChange: RangePickerProps["onChange"] = (dates, dateStrings) => {
    console.log(dates, dateStrings);
  };

  return (
    <RangePicker
      picker={picker}
      format={format}
      size={size}
      showTime={showTime}
      allowClear={allowClear}
      disabled={disabled}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default StoryRangeDatePicker;
