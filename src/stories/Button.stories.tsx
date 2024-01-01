import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { Button } from "../app/components/atoms/button/Button";

const meta = {
  title: 'Atoms/Button/Button',
  component: Button,
  parameters: {
    // layout: 'centered',
    // layout: 'fullscreen',
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center px-4 inner">< Story /></div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    mode:"primary",
    link:false,
    url:"",
    click: action("clicked"),
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    mode: "secondary",
    link: false,
    url: "",
    click: action("clicked"),
    children: 'Secondary Button',
  },
};

export const SecondaryGreen: Story = {
  args: {
    mode: "secondary-green",
    link: false,
    url: "",
    click: action("clicked"),
    children: 'SecondaryGreen Button',
  },
};
