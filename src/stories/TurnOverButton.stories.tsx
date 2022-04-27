import React from "react";
import { Story, Meta } from '@storybook/react';

import TurnOverButton from "../components/Buttons/TurnOverButton";
import { TurnOverButtonProps } from "CustomTypes";

export default {
    component: TurnOverButton,
    title: 'Buttons/Turn Over Button'
} as Meta;

const Template: Story<TurnOverButtonProps> = (args: TurnOverButtonProps) => <TurnOverButton {...args} />

export const TurnOverButtons = () => (
    <div>
        <TurnOverButton type="button-left" />
        <TurnOverButton type="button-right" />
    </div>
);

export const ButtonLeft = Template.bind({});
ButtonLeft.args = {
    type: "button-left"
};

export const ButtonRight = Template.bind({});
ButtonRight.args = {
    type: "button-right"
}