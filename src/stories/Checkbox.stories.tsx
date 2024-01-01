import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { Checkbox } from "../app/components/atoms/input/Checkbox";

const meta = {
  title: 'Atoms/Input/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    // layout: 'fullscreen',
    // layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>< Story /></>
    ),
  ],
  argTypes:{
    checked: {
      options: [true, false],
      control: { type: 'radio' },
    },
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "demo-1",
    checked: false,
    checkboxClick: action("clicked"),
    index: 1,
    name: "demo-1",
  },
};

export const Checkded: Story = {
  args: {
    id: "demo-2",
    checked: true,
    checkboxClick: action("clicked"),
    index: 1,
    name: "demo-2",
  },
};
