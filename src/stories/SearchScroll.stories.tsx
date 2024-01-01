import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { SearchScroll } from "../app/components/atoms/button/SearchScroll";

const meta = {
  title: 'Atoms/Button/SearchScroll',
  component: SearchScroll,
  parameters: {
    layout: 'centered',
    // layout: 'fullscreen',
    // layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center px-4 inner">< Story /></div>
    ),
  ],
} satisfies Meta<typeof SearchScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
