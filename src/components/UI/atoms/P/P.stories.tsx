import type { Meta, StoryObj } from "@storybook/react";
import P from "./P";

const meta: Meta<typeof P> = {
  title: "Atoms/Typography/P",
  component: P,
};

export default meta;
type Story = StoryObj<typeof P>;

export const ParagraphNormal: Story = {
  args: {
    children: "Hello World!!!",
    strong: false,
  },
};

export const ParagraphStrong: Story = {
  args: {
    children: "Hello World!!!",
    strong: true,
  },
};
