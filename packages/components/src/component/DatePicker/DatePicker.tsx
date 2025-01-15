import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import React from "react";
import koKR from "antd/lib/locale/ko_KR";
import moment, { Moment } from "moment";
import "antd/dist/antd.css";

export interface DatePickerStoryProps {
  picker?: "week" | "month" | "year";
  format?: string;
  size?: "small" | "middle" | "large";
  showTime?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  locale?: typeof koKR;
  placeholder?: string;
}

const StoryDatePicker: React.FC<DatePickerStoryProps> = ({
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
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
        defaultValue={defaultValue ? moment(defaultValue, format) : undefined} // 문자열을 Moment 객체로 변환
        onChange={onChange}
        picker={picker}
        format={format}
        size={size}
        showTime={showTime}
        allowClear={allowClear}
        disabled={disabled}
        placeholder={placeholder}
      />
    </ConfigProvider>
  );
};

export default StoryDatePicker;
