import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreButton } from "./StoreButton";

export default {
    title: 'Store Button',
    component: StoreButton,
    argTypes: {
        backgroundColor: { control: 'light' },
    },
} as ComponentMeta<typeof StoreButton>;

const Template: ComponentStory<typeof StoreButton> = (args) => <StoreButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: "light",
    content: "Our Deals"
}

export const LightNarrow = Template.bind({});
LightNarrow.args = {
    backgroundColor: "light",
    state: "narrow",
    content: "Our Deals"
};

export const Blue = Template.bind({});
Blue.args = {
    backgroundColor: "blue",
    content: "Our Deals"
}

export const BlueNarrow = Template.bind({});
BlueNarrow.args = {
    backgroundColor: "blue",
    state: "narrow",
    content: "Our Deals"
}

export const YellowNarrow = Template.bind({});
YellowNarrow.args = {
    backgroundColor: "yellow",
    state: "narrow",
    content: "Our Deals"
}

export const YellowGeneral = Template.bind({});
YellowGeneral.args = {
    backgroundColor: "yellow",
    state: "general",
    content: "Our Deals"
}

export const YellowHeader = Template.bind({});
YellowHeader.args = {
    backgroundColor: "yellow",
    state: "header",
    content: "Our Deals"
}

export const Grey = Template.bind({});
Grey.args = {
    backgroundColor: "grey",
    content: "Our Deals"
}

export const GreyGeneral = Template.bind({});
GreyGeneral.args = {
    backgroundColor: "grey",
    state: "general",
    content: "Our Deals"
}

export const Black = Template.bind({});
Black.args = {
    backgroundColor: "black",
    content: "Our Deals"
}

export const Icon = Template.bind({});
Icon.args = {
    state: "icon",
    content: "4"
}