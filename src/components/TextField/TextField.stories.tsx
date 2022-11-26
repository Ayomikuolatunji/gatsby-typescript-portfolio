import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicTextFields from "./TextField";

export default {
  title: "Components/Textfields",
  component: BasicTextFields,
  argTypes: {
    inputData: {
      description: "Prop description",
      title: {
        control: { type: "input" },
      },
    },
    handleChange: {
      description: "textfield handlechange function",
    },
  },
} as ComponentMeta<typeof BasicTextFields>;

const Template: ComponentStory<typeof BasicTextFields> = (args) => (
  <BasicTextFields {...args} />
);

export const TextField = Template.bind({});

TextField.args = {
  ...TextField.args,
  inputData: {
    title: "",
    desc: "",
  },
  handleChange: TextField.args?.handleChange,
};
