import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { DateLabel } from "../app/components/atoms/label/DateLabel";

const meta = {
  title: 'Atoms/Label/DateLabel',
  component: DateLabel,
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
} satisfies Meta<typeof DateLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "2024/01/01"
  },
};
