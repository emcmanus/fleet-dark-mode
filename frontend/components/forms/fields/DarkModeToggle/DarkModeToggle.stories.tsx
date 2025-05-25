import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import DarkModeToggle from "./DarkModeToggle";

const meta: Meta<typeof DarkModeToggle> = {
  title: "Components/FormFields/DarkModeToggle",
  component: DarkModeToggle,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    value: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

// Controlled component wrapper for interactive story
const ControlledDarkModeToggle = (args: any) => {
  const [darkMode, setDarkMode] = useState(args.value || false);

  return (
    <DarkModeToggle
      {...args}
      value={darkMode}
      onChange={setDarkMode}
    />
  );
};

export const Default: Story = {
  render: ControlledDarkModeToggle,
  args: {
    value: false,
    disabled: false,
  },
};

export const DarkModeOn: Story = {
  render: ControlledDarkModeToggle,
  args: {
    value: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: ControlledDarkModeToggle,
  args: {
    value: false,
    disabled: true,
  },
};

export const DisabledOn: Story = {
  render: ControlledDarkModeToggle,
  args: {
    value: true,
    disabled: true,
  },
};