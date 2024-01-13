import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { GenreList } from "../app/components/atoms/list/GenreList";


const meta = {
  title: 'Atoms/List/GenreList',
  component: GenreList,
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
} satisfies Meta<typeof GenreList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { genres: ["アクション", "アドベンチャー", "コメディ"] },
};
