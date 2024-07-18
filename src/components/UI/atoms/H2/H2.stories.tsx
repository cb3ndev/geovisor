import type { Meta, StoryObj } from "@storybook/react";
import H2 from "./H2";

const meta: Meta<typeof H2> = {
  title: "Atoms/Typography/H2",
  component: H2,
};

export default meta;
type Story = StoryObj<typeof H2>;

export const Heading2Normal: Story = {
  args: {
    children: "Hello World!!!",
    strong: false,
  },
};

export const Heading2Strong: Story = {
  args: {
    children: "Hello World!!!",
    strong: true,
  },
};
