import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "antd";
import { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker<DatePickerProps>;

export interface RangePickerStoryProps extends Partial<RangePickerProps> {
  picker?: "date" | "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
  showTime?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  defaultValue?: [Dayjs, Dayjs]; // 시작과 종료 날짜를 다룸
}

const StoryRangeDatePicker: React.FC<RangePickerStoryProps> = ({
  picker,
  format = "YYYY-MM-DD",
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
