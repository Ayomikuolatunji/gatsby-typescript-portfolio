import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LayoutsPage } from "./Layouts";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Layouts",
  component: LayoutsPage,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof LayoutsPage>;

const Template: ComponentStory<typeof LayoutsPage> = (args) => (
  <LayoutsPage {...args} />
);

export const LayoutsComponent = Template.bind({});

LayoutsComponent.args = {
  ...LayoutsComponent.args,
  children: React.createElement("div", {}, "Hello"),
};

LayoutsComponent.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
