import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import React from "react";
import Email from "./index";

export default {
  title: "Pages/Email",
  component: Email,
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
} as ComponentMeta<typeof Email>;

const Template: ComponentStory<typeof Email> = (args) => <Email />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});

export const Tablet = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
