import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";


const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        componentSubtitle: '버튼은 클릭을 통해 사용자에게 액션을 제공하는 컴포넌트입니다.',
    },
    argTypes: {
        children: {
            description: 'children을 설정합니다.',
            control: 'text'
        },
        className: {
            description: 'className을 설정합니다.',
            control: 'text'
        },
        appName: {
            description: 'appName을 설정합니다.',
            control: 'text'
        },
    },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: '기본 설정의 버튼입니다.',
    args: {
        children: '테스트용 버튼',
        appName: '테스트'
    },
  };