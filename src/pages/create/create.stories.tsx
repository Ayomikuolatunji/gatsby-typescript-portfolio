import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React from "react";
import Create from "./create";

export default {
  title: "Pages/Create",
  component: Create,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    viewport: {
      control: "select",
      options: ["lg", "md", "sm"],
    },
  },
} as ComponentMeta<typeof Create>;

const Template: ComponentStory<typeof Create> = (args) => <Create {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});

export const Tablet = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
