import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { SearchButton } from "../app/components/atoms/button/SearchButton";

const meta = {
  title: 'Atoms/Button/SearchButton',
  component: SearchButton,
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
} satisfies Meta<typeof SearchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
