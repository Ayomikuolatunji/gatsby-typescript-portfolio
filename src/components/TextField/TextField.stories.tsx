import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import BasicTextFields from "./TextField";

export default {
  title: "Components/Textfields",
  component: BasicTextFields,
} as ComponentMeta<typeof BasicTextFields>;

const Template: ComponentStory<typeof BasicTextFields> = (args) => (
  <BasicTextFields />
);

export const TextField = Template.bind({});


interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
  }
  