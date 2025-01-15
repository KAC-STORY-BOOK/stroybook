import React from "react";
import { DatePicker, ConfigProvider } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import moment, { locale, Moment } from "moment";
const { RangePicker } = DatePicker;
import "antd/dist/antd.css";
import koKR from "antd/lib/locale/ko_KR";

export interface RangePickerStoryProps {
  picker?: "date" | "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
  showTime?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  defaultValue?: [string, string]; // 시작과 종료 날짜를 다룸
  locale?: typeof koKR;
  placeholder?: [string, string];
}

const StoryRangeDatePicker: React.FC<RangePickerStoryProps> = ({
  picker,
  format,
  size,
  showTime = false,
  allowClear = true,
  disabled = false,
  defaultValue,
  locale = koKR,
  placeholder,
}) => {
  const onChange: RangePickerProps["onChange"] = (dates, dateStrings) => {
    console.log(dates, dateStrings);
  };

  const momentDefaultValue: [Moment, Moment] | undefined = defaultValue
    ? [moment(defaultValue[0], format), moment(defaultValue[1], format)]
    : undefined;

  return (
    <ConfigProvider locale={locale}>
      <RangePicker
        picker={picker}
        format={format}
        size={size}
        showTime={showTime}
        allowClear={allowClear}
        disabled={disabled}
        defaultValue={momentDefaultValue}
        onChange={onChange}
        placeholder={placeholder}
      />
    </ConfigProvider>
  );
};

export default StoryRangeDatePicker;
