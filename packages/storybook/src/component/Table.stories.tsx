// packages/components/src/Table/Table.stories.tsx
import React from "react";
import { StoryFn as Story, Meta } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";
import { Table } from "@kac-monorepo/components/src/component/index";
import { action } from "@storybook/addon-actions";
import { TableProps } from "@kac-monorepo/components/src/component/Table/Table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "테이블에 표시될 데이터 배열입니다.",
    },
    columns: {
      control: "object",
      description: "테이블의 컬럼 정의 배열입니다.",
    },
    striped: {
      control: "boolean",
      description: "줄무늬 표시 여부를 설정합니다.",
    },
    bordered: {
      control: "boolean",
      description: "테이블 테두리 표시 여부를 설정합니다.",
    },
    hoverable: {
      control: "boolean",
      description: "호버 시 효과 표시 여부를 설정합니다.",
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    docs: {
      description: {
        component:
          "Table 컴포넌트는 데이터를 표 형식으로 표시하며, 다양한 스타일 옵션을 제공합니다.",
      },
    },
  },
} as Meta;

const Template: Story<TableProps<User>> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: "홍길동", email: "hong@example.com", role: "관리자" },
    { id: 2, name: "김철수", email: "kim@example.com", role: "유저" },
    { id: 3, name: "이영희", email: "lee@example.com", role: "유저" },
  ],
  columns: [
    { header: "ID", accessor: "id" },
    { header: "이름", accessor: "name" },
    { header: "이메일", accessor: "email" },
    { header: "역할", accessor: "role" },
  ],
};

export const Striped = Template.bind({});
Striped.args = {
  ...Default.args,
  striped: true,
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...Default.args,
  bordered: true,
};

export const Hoverable = Template.bind({});
Hoverable.args = {
  ...Default.args,
  hoverable: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  // 예를 들어, 특정 행을 비활성화하는 기능이 필요하다면 추가 구현 필요
};
