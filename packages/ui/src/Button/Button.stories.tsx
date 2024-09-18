import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    componentSubtitle:
      "버튼은 클릭을 통해 사용자에게 액션을 제공하는 컴포넌트입니다.",
  },
  argTypes: {
    color: {
      description: "버튼의 색상을 설정합니다.",
      control: "select",
    },
    size: {
      description: "버튼의 크기를 설정합니다.",
      control: "select",
    },
    font: {
      description: "버튼 내부 텍스트의 폰트를 설정합니다.",
      control: "select",
    },
    disabled: {
      description: "비활성화 상태를 설정합니다.",
      control: "boolean",
    },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DesktopDefault: Story = {
  args: {
    size: "desktop",
    children: "약속 생성하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const DesktopDisabled: Story = {
  args: {
    color: "disabled",
    size: "desktop",
    disabled: true,
    children: "약속 생성하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const DesktopCancel: Story = {
  args: {
    color: "cancel",
    size: "desktop",
    children: "취소하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const DesktopDonate: Story = {
  args: {
    size: "desktop_donate",
    children: "후원하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const MobileDefault: Story = {
  args: {
    size: "mobile",
    children: "약속 생성하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const MobileDisabled: Story = {
  args: {
    color: "disabled",
    size: "mobile",
    disabled: true,
    children: "약속 생성하기",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};

export const MobileDonate: Story = {
  args: {
    size: "mobile_donate",
    children: "후원하기",
    font: "mobile_donate",
    onClick: () => alert("버튼이 클릭되었습니다."),
  },
};
