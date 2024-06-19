import Icon from "./Icon";
import { StoryObj } from "@storybook/react";
import { iconSizes, iconWeight } from "./Icon.types";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: { icon: "done" },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: iconSizes,
    },
    weight: {
      control: { type: "radio" },
      options: iconWeight,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

const Template: Story = {
  render: (args) => <Icon {...args} />,
};

export const Control = {
  ...Template,
};
