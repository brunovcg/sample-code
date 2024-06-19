import { StoryObj } from "@storybook/react";
import Button from "./Button";
import { COLOR_VARIANTS } from "@/styles";
import { icons } from "../icon/Icon.registration";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    text: "My Button",
  },
  argTypes: {
    variant: {
      options: Object.keys(COLOR_VARIANTS),
      control: { type: "select" },
    },
    icon: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const Template: Story = {
  render: (args) => <Button {...args} />,
};

export const Control = {
  ...Template,
};
