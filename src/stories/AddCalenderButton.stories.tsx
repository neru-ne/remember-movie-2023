import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { AddCalendarButton } from "../app/components/atoms/button/AddCalendarButton";

const meta = {
  title: 'Atoms/Button/AddCalenderButton',
  component: AddCalendarButton,
  parameters: {
    // layout: 'centered',
    // layout:'fullscreen',
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center px-4 inner">< Story /></div>
    ),
  ],
} satisfies Meta<typeof AddCalendarButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url:""
  },
};
