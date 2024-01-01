import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { Loading } from "../app/components/atoms/loading/Loading";

const meta = {
  title: 'Atoms/Loading/Loading',
  component: Loading,
  parameters: {
    // layout: 'centered',
    layout: 'fullscreen',
    // layout: 'padded',
  },
  decorators: [
    (Story) => (
      <>< Story /></>
    ),
  ],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loadingStatus: true
  },
};
