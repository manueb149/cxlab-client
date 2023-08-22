import { Group } from ".";

export default {
  title: "Components/Group",
  component: Group,
  argTypes: {
    property1: {
      options: ["variant-4", "variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-4",
    className: {},
    headerClassName: {},
    arrowRight: "https://generation-sessions.s3.amazonaws.com/0d2c1375309c1662175fac45e36f3073/img/arrow-right-14.png",
  },
};
