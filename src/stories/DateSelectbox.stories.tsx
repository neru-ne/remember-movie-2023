import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { DateSelectbox } from "../app/components/atoms/input/DateSelectbox";

const meta = {
  title: 'Atoms/Input/DateSelectbox',
  component: DateSelectbox,
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
} satisfies Meta<typeof DateSelectbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    date: "2023/12",
    first: "2023/12/01",
    last: "2023/12/31",
  },
  {
    date: "2024/01",
    first: "2024/01/01",
    last: "2024/01/31",
  },
  {
    date: "2024/02",
    first: "2024/02/01",
    last: "2024/02/29",
  },
]


export const Default: Story = {
  args: {
    data: data,
    selectChange: action("clicked"),
    name:"demo"
  },
};
