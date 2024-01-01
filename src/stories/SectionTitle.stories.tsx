import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { SectionTitle } from "../app/components/atoms/heading/SectionTitle";

const meta = {
  title: 'Atoms/Heading/SectionTitle',
  component: SectionTitle,
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
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Section Title"
  },
};
