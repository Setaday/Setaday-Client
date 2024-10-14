import TextField from "./TextField";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    componentSubtitle: "TextField는 사용자에게 입력창을 제공하는 컴포넌트입니다.",
  },
  argTypes: {
    isError: {
      description: "입력값의 오류 여부를 설정합니다.",
      control: "select",
    },
    inputSize: {
      description: "입력창의 크기를 설정합니다.",
      control: "select",
    },
  },
} as Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesktopDefault: Story = {
  args: {
    inputSize: "desktop",
    maxLength: 10,
    value: "약속 생성하기",
  },
};

export const DesktopError: Story = {
  args: {
    isError: true,
    inputSize: "desktop",
    maxLength: 10,
    value: "약속 생성하기",
  },
};

export const DesktopLargeDefault: Story = {
  args: {
    inputSize: "desktop_lg",
    maxLength: 10,
    value: "약속 생성하기",
  },
};

export const DesktopLargeError: Story = {
  args: {
    isError: true,
    inputSize: "desktop_lg",
    maxLength: 10,
    value: "약속 생성하기",
  },
};

export const MobileDefault: Story = {
  args: {
    inputSize: "mobile",
    maxLength: 10,
    value: "약속 생성하기",
  },
};

export const MobileError: Story = {
  args: {
    isError: true,
    inputSize: "mobile",
    maxLength: 10,
    value: "약속 생성하기",
  },
};
