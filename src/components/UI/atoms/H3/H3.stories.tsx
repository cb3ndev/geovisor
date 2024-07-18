import type { Meta, StoryObj } from "@storybook/react";
import H3 from "./H3";

const meta: Meta<typeof H3> = {
  title: "Atoms/Typography/H3",
  component: H3,
};

export default meta;
type Story = StoryObj<typeof H3>;

export const Heading3Normal: Story = {
  args: {
    children: "Hello World!!!",
    strong: false,
  },
};

export const Heading3Strong: Story = {
  args: {
    children: "Hello World!!!",
    strong: true,
    className: "text-red-600",
  },
};
