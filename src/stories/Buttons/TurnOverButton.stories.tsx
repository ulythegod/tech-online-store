import React from "react";
import { Story, Meta } from '@storybook/react';
import TurnOverButtonCustomDocs from './TurnOverButtonCustomDocs.mdx';

import TurnOverButton from "../../components/Buttons/TurnOverButton";
import { TurnOverButtonProps } from 'CustomPropsTypes';

export default {
    component: TurnOverButton,
    title: 'Buttons/Turn Over Button',
    argTypes: {
        type: {
            name: "Button Type",
            type: { name: 'string', required: true },
            options: [
                'button-left', 
                'button-right',
            ],
            description: 'Set Button Type',
            control: { type: 'radio' },
        }
    },
    parameters: {
        docs: {
            page: TurnOverButtonCustomDocs
        }
    }
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