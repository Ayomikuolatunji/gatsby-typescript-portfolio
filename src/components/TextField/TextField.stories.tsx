import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicTextFields from "./TextField";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default {
  title: "Components/Textfields",
  component: BasicTextFields,
  argTypes: {
    inputData: {
      description: "Prop description",
    },
    handleChange: {
      description: "textfield handlechange function",
    },
  },
} as ComponentMeta<typeof BasicTextFields>;

const Template: ComponentStory<typeof BasicTextFields> = (args) => {
  return <BasicTextFields {...args} />;
};

export const TextField = Template.bind({});

TextField.args = {
  ...TextField.args,
  handleChange: TextField.args?.handleChange,
  inputData: {
    title: "",
    desc: "",
    radioValue: "",
  },
  renderRadioGroups: (data) => (
    <>
      <FormControlLabel control={<Radio />} label="money" value="money" />
      <FormControlLabel control={<Radio />} label="Todos" value="Todos" />
      <FormControlLabel
        control={<Radio />}
        label="Reminder"
        value="Reminder"
        name="Reminder"
      />
      <FormControlLabel control={<Radio />} label="work" value="Work" />
    </>
  ),
};
