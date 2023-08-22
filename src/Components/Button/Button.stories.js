import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["xl", "lg", "two-xl", "sm", "md"],
      control: { type: "select" },
    },
    hierarchy: {
      options: [
        "tertiary-color",
        "link-color",
        "tertiary-gray",
        "secondary-color",
        "link-gray",
        "primary",
        "secondary-gray",
      ],
      control: { type: "select" },
    },
    icon: {
      options: ["dot-leading", "only", "default"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconTrailing: true,
    iconLeading: true,
    size: "xl",
    hierarchy: "tertiary-color",
    icon: "dot-leading",
    destructive: true,
    stateProp: "disabled",
    className: {},
    text: "Button CTA",
    textClassName: {},
  },
};
