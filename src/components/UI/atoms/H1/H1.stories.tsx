import type { Meta, StoryObj } from "@storybook/react";
import H1 from "./H1";

const meta: Meta<typeof H1> = {
  title: "Atoms/Typography/H1",
  component: H1,
};

export default meta;
type Story = StoryObj<typeof H1>;

export const Heading1Normal: Story = {
  args: {
    children: "Hello World!!!",
    strong: false,
  },
};

export const Heading1Strong: Story = {
  args: {
    children: "Hello World!!!",
    strong: true,
  },
};
