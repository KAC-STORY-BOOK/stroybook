import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { SearchBar } from "@kac-monorepo/components/src/component/index";
import { action } from "@storybook/addon-actions";
import { SearchBarProps } from "@kac-monorepo/components/src/component/searchbar/SearchBar";

export default {
  title: "components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "검색 입력 필드의 placeholder를 지정합니다.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "검색바의 크기를 지정합니다.",
    },
    buttonText: {
      control: "text",
      description: "검색 버튼에 표시될 텍스트를 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "검색바를 비활성화합니다.",
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    docs: {
      description: {
        component:
          "SearchBar 컴포넌트는 입력 필드와 버튼으로 구성되어 사용자가 검색을 수행할 수 있도록 합니다.",
      },
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "검색...",
  size: "medium",
  buttonText: "검색",
  onSearch: () => window.alert(`검색 완료`),
};

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <SearchBar
      placeholder="Small SearchBar"
      size="small"
      buttonText="검색"
      onSearch={action("Small search executed")}
    />
    <SearchBar
      placeholder="Medium SearchBar"
      size="medium"
      buttonText="검색"
      onSearch={action("Medium search executed")}
    />
    <SearchBar
      placeholder="Large SearchBar"
      size="large"
      buttonText="검색"
      onSearch={action("Large search executed")}
    />
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "검색...",
  size: "medium",
  buttonText: "검색",
  disabled: true,
  onSearch: action("Search executed (disabled)"),
};

/**
 * Play function이 포함된 스토리 추가
 */
export const PlaySearchBar = Template.bind({});
PlaySearchBar.args = {
  placeholder: "검색어를 입력하세요...",
  buttonText: "검색",
  size: "medium",
  onSearch: async (value) => {
    return window.alert(`검색 완료`);
  },
};

PlaySearchBar.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 첫 번째 검색 자동화
  await userEvent.type(
    canvas.getByPlaceholderText("검색어를 입력하세요..."),
    "자동화된 검색어",
    { delay: 200 },
  );

  await userEvent.click(canvas.getByRole("button"));
};
