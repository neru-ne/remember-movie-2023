import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { Selectbox } from "../app/components/atoms/input/Selectbox";

const meta = {
  title: 'Atoms/Input/Selectbox',
  component: Selectbox,
  parameters: {
    // layout: 'centered',
    // layout: 'fullscreen',
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>< Story /></>
    ),
  ],
  argTypes: {
  }
} satisfies Meta<typeof Selectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    value: "popularity.desc",
    name: "人気順",
  },
  {
    value: "primary_release_date.asc",
    name: "公開予定が近い順",
  },
]

export const Default: Story = {
  args: {
    domId: "demo-1",
    data: data,
    name:"demo-1",
    selectChange: action("clicked"),
  },
};
