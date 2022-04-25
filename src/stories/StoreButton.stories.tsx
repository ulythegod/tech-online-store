import React from 'react';
import { Story, Meta } from '@storybook/react';

import StoreButton from '../components/Buttons/StoreButton';
import { StoreButtonProps } from 'CustomTypes';
import { ReactComponent as PayPal } from '../../images/paypal.svg';

export default {
    component: StoreButton,
    title: 'Buttons/Store Button'
} as Meta;

const Template: Story<StoreButtonProps> = (args: StoreButtonProps) => <StoreButton {...args} />

export const Default = Template.bind({});
Default.args = {
    buttonStyle: 'light-button',
    content: "Add to Cart"
};

export const LigthButtonNarrow = Template.bind({});
LigthButtonNarrow.args = {
    ...Default.args,
    buttonStyle: 'light-button-narrow',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
    ...Default.args,
    buttonStyle: 'blue-button',
}

export const YellowButton = Template.bind({});
YellowButton.args = {
    ...Default.args,
    buttonStyle: 'yellow-button',
}

export const BlueButtonNarrow = Template.bind({});
BlueButtonNarrow.args = {
    ...Default.args,
    buttonStyle: 'blue-button-narrow',
}

export const YellowButtonNarrow = Template.bind({});
YellowButtonNarrow.args = {
    ...Default.args,
    buttonStyle: 'yellow-button-narrow',
}

export const YellowButtonGeneral = Template.bind({});
YellowButtonGeneral.args = {
    ...Default.args,
    buttonStyle: 'yellow-button-general',
}

export const GreyButton = Template.bind({});
GreyButton.args = {
    ...Default.args,
    buttonStyle: 'grey-button',
}

export const GreyButtonGeneral = Template.bind({});
GreyButtonGeneral.args = {
    ...Default.args,
    buttonStyle: 'grey-button',
}

export const BlackButton = Template.bind({});
BlackButton.args = {
    ...Default.args,
    buttonStyle: 'black-button',
}