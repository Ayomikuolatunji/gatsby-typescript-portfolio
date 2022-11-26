import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TypographyComponent from "./Typography";

export default {
  title: "Components/Typography",
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
  <TypographyComponent />
);

export const Typography = Template.bind({});
