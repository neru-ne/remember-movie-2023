import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { GenreLabel } from "../app/components/atoms/label/GenreLabel";

const meta = {
  title: 'Atoms/Label/GenreLabel',
  component: GenreLabel,
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
} satisfies Meta<typeof GenreLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "アクション"
  },
};
