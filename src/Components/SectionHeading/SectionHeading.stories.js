import { SectionHeading } from ".";

export default {
  title: "Components/SectionHeading",
  component: SectionHeading,
  argTypes: {
    type: {
      options: ["title", "title-description"],
      control: { type: "select" },
    },
    column: {
      options: ["twelve-col", "five-col", "eight-col", "six-col"],
      control: { type: "select" },
    },
    alignment: {
      options: ["left-align", "center-align"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "title",
    column: "twelve-col",
    alignment: "left-align",
    className: {},
    text: "Section Title",
  },
};
