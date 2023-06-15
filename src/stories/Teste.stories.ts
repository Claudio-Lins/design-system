import type { Meta, StoryObj } from "@storybook/react";
import { Teste } from "./Teste";

const meta: Meta<typeof Teste> = {
  title: "Example/Teste",
  component: Teste,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Teste>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
