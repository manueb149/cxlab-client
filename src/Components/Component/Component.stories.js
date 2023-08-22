import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["variant-5", "variant-3", "desktop-1", "variant-4", "desktop-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-5",
  },
};
