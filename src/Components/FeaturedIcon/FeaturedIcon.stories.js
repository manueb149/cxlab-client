import { FeaturedIcon } from ".";

export default {
  title: "Components/FeaturedIcon",
  component: FeaturedIcon,
  argTypes: {
    size: {
      options: ["xl", "xs", "lg", "sm", "md"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "gray", "success", "primary", "error"],
      control: { type: "select" },
    },
    theme: {
      options: [
        "dark-circle",
        "light-square",
        "dark-square",
        "glass",
        "light-circle-outline",
        "modern",
        "light-circle",
        "mid-square",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "xl",
    color: "warning",
    theme: "dark-circle",
    className: {},
  },
};
