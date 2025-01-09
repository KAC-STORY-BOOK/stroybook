import { Account } from "@kac-monorepo/components/src/component/index";
import { StoryFn as Story, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Account",
  component: Account,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "이름은 문자만 입력이 가능합니다.",
    },
    email: {
      description:
        "이메일은 '@'와 도메인을 포함해야 하며 유효한 형식으로 입력해야 합니다. 예: example@domain.com",
    },
    password: {
      description: "비밀번호 8자 이상, 대소문자 및 숫자를 포함해야 합니다. ",
    },
    confirmPassword: {
      description: "입력한 비밀번호를 재입력 해야합니다.",
    },
  },
} as Meta<typeof Account>;

const Template: Story<typeof Account> = (args) => <Account {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

Default.parameters = {
  docs: {
    description: {
      story: `**이름 필드**는 한글 또는 영어 문자만 입력 가능합니다.  
        **이메일 필드**는 '@'와 도메인을 포함한 유효한 이메일 주소를 입력해야 합니다.  
        **비밀번호 필드**는 8자 이상이며, 대소문자, 숫자 및 기호를 포함해야 합니다.  
        **비밀번호 재입력 필드**는 위에 입력한 비밀번호와 동일해야 합니다.
            `,
    },
  },
};
