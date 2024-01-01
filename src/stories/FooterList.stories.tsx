import type { Meta, StoryObj } from '@storybook/react';
import { action } from "@storybook/addon-actions";

import { FooterList } from "../app/components/atoms/list/FooterList";

const meta = {
  title: 'Atoms/List/FooterList',
  component: FooterList,
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
} satisfies Meta<typeof FooterList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "検索",
    url: "/search"
  },
  {
    name: "このサイトについて",
    url: "/about"
  },
  {
    name: "プライバシーポリシー",
    url: "/privacy"
  },
  {
    name: "免責事項",
    url: "/disclaimer"
  },
];

export const Default: Story = {
  args: data,
};
