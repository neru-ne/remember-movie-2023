import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { FooterNavi } from "../app/components/atoms/list/FooterNavi";

const meta = {
  title: 'Atoms/List/FooterNavi',
  component: FooterNavi,
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
} satisfies Meta<typeof FooterNavi>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = {
  home: {
    active: true,
  },
  search: {
    active: true,
  }
};

export const Default: Story = {
  args: data,
};
