import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { TopPageHeading } from "../app/components/atoms/heading/TopPageHeading";

const meta = {
  title: 'Atoms/Heading/TopPageHeading',
  component: TopPageHeading,
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
} satisfies Meta<typeof TopPageHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Top Page Heading"
  },
};
