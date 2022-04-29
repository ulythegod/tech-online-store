import React from 'react';
import { Story, Meta } from '@storybook/react';
import StoreButtonCustomDocs from './StoreButtonCustomDocs.mdx';

import StoreButton from '../../components/Buttons/StoreButton';
import { StoreButtonProps } from 'CustomPropsTypes';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import { ReactComponent as TableView } from '../../images/table-view.svg';

export default {
    component: StoreButton,
    title: 'Buttons/Store Button',
    argTypes: {
        buttonStyle: {
            name: "buttonStyle",
            type: { name: 'string', required: true },
            options: [
                'light-button', 
                'light-button-narrow',
                'blue-button',
                'yellow-button',
                'blue-button-narrow',
                'yellow-button-narrow',
                'yellow-button-general',
                'grey-button',
                'grey-button-general',
                'black-button',
                'icon-button',
                'icon-button-disabled'
            ],
            description: 'Set Button Style',
            control: { type: 'radio' },
        },
        content: {
            name: "Content",
            defaultValue: "Add to Cart",
            description: 'Set Content',
        }
    },
    parameters: {
        docs: {
            page: StoreButtonCustomDocs
        }
    }
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

export const YellowButtonWithIcon = Template.bind({});
YellowButtonWithIcon.args = {
    ...Default.args,
    buttonStyle: 'yellow-button-general',
    content: <PayPal />,
}

export const YellowCheckoutButton = Template.bind({});
YellowCheckoutButton.args = {
    ...Default.args,
    buttonStyle: 'yellow-button-general',
    content: <>Checkout with <PayPal /></>,
}

export const GreyButton = Template.bind({});
GreyButton.args = {
    ...Default.args,
    buttonStyle: 'grey-button',
}

export const GreyButtonGeneral = Template.bind({});
GreyButtonGeneral.args = {
    ...Default.args,
    buttonStyle: 'grey-button-general',
}

export const BlackButton = Template.bind({});
BlackButton.args = {
    ...Default.args,
    buttonStyle: 'black-button',
}

export const IconButton = Template.bind({});
IconButton.args = {
    ...Default.args,
    buttonStyle: "icon-button",
    content: <TableView />
}

export const IconButtonDisabled = Template.bind({});
IconButtonDisabled.args = {
    ...IconButton.args,
    buttonStyle: "icon-button-disabled",
}