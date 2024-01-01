import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { ModalCloseButton } from "../app/components/atoms/button/ModalCloseButton";

const meta = {
  title: 'Atoms/Button/ModalCloseButton',
  component: ModalCloseButton,
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
} satisfies Meta<typeof ModalCloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    click: action("clicked"),
    children: '閉じる',
  },
};
