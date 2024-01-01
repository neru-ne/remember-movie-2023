import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { PageHeading } from "../app/components/atoms/heading/PageHeading";

const meta = {
  title: 'Atoms/Heading/PageHeading',
  component: PageHeading,
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
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:"Page Heading"
  },
};
