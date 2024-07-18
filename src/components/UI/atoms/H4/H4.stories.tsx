import type { Meta, StoryObj } from "@storybook/react";
import H4 from "./H4";

const meta: Meta<typeof H4> = {
  title: "Atoms/Typography/H4",
  component: H4,
};

export default meta;
type Story = StoryObj<typeof H4>;

export const Heading4Normal: Story = {
  args: {
    children: "Hello World!!!",
    strong: false,
  },
};

export const Heading4Strong: Story = {
  args: {
    children: "Hello World!!!",
    strong: true,
  },
};
