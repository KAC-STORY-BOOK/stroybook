import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import SearchBar from "@kac-monorepo/components/src/component/searchbar/SearchBar";
import { action } from "@storybook/addon-actions";

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
    docs: {
      description: {
        component:
          "SearchBar 컴포넌트는 입력 필드와 버튼으로 구성되어 사용자가 검색을 수행할 수 있도록 합니다.",
      },
    },
  },
} as Meta<typeof SearchBar>;

const Template: Story<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "검색...",
  size: "medium",
  buttonText: "검색",
  onSearch: action("Search executed"),
};

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <SearchBar
      placeholder="Small SearchBar"
      size="small"
      buttonText="Search"
      onSearch={action("Small search executed")}
    />
    <SearchBar
      placeholder="Medium SearchBar"
      size="medium"
      buttonText="Search"
      onSearch={action("Medium search executed")}
    />
    <SearchBar
      placeholder="Large SearchBar"
      size="large"
      buttonText="Search"
      onSearch={action("Large search executed")}
    />
  </div>
);

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "감섹...",
  size: "medium",
  buttonText: "감섹",
  disabled: true,
  onSearch: action("Search executed (disabled)"),
};

export const CustomButtonText = Template.bind({});
CustomButtonText.args = {
  placeholder: "감섹...",
  size: "large",
  buttonText: "감섹",
  onSearch: action("Custom button clicked"),
};
