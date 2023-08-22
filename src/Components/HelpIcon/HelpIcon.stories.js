import { HelpIcon } from ".";

export default {
  title: "Components/HelpIcon",
  component: HelpIcon,
  argTypes: {
    tooltip: {
      options: ["top-left", "right", "top-arrow", "bottom", "left", "top-no-arrow", "top-right"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    cursor: true,
    open: true,
    supportingText: true,
    tooltip: "top-left",
    className: {},
  },
};
