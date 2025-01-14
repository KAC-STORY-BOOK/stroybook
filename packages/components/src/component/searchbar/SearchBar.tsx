// packages/components/src/SearchBar/SearchBar.tsx
import React, { useState } from "react";
import { Input, Button } from "../../designSystem/index";
import "./SearchBar.css";

export interface SearchBarProps {
  onSearch: (value: string) => void; // 검색 실행 함수
  placeholder?: string; // 입력 필드 placeholder
  size: "small" | "medium" | "large"; // 크기 옵션
  buttonText?: string; // 버튼 텍스트
  disabled?: boolean; // 비활성화 여부
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "검색...",
  size = "medium",
  buttonText = "Search",
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (!disabled && inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`search-bar search-bar-${size}`}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        inputSize={size}
        disabled={disabled}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={handleSearch}
        size={size}
        disabled={disabled || !inputValue.trim()}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SearchBar;
