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
    style: 'light-button',
    content: "Add to Cart"
};

export const LigthButtonNarrow = Template.bind({});
LigthButtonNarrow.args = {
    ...Default.args,
    style: 'light-button-narrow',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
    ...Default.args,
    style: 'blue-button',
}

export const YellowButton = Template.bind({});
YellowButton.args = {
    ...Default.args,
    style: 'yellow-button',
}

export const BlueButtonNarrow = Template.bind({});
BlueButtonNarrow.args = {
    ...Default.args,
    style: 'blue-button-narrow',
}

export const YellowButtonNarrow = Template.bind({});
YellowButtonNarrow.args = {
    ...Default.args,
    style: 'yellow-button-narrow',
}

export const YellowButtonGeneral = Template.bind({});
YellowButtonGeneral.args = {
    ...Default.args,
    style: 'yellow-button-general',
}

export const GreyButton = Template.bind({});
GreyButton.args = {
    ...Default.args,
    style: 'grey-button',
}

export const GreyButtonGeneral = Template.bind({});
GreyButtonGeneral.args = {
    ...Default.args,
    style: 'grey-button',
}

export const BlackButton = Template.bind({});
BlackButton.args = {
    ...Default.args,
    style: 'black-button',
}