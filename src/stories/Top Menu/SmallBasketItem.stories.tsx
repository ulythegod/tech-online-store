import React from "react";
import { Meta, Story } from '@storybook/react';
import SmallBasketItemCustomDocs from './SmallBasketItemCustomDocs.mdx';

import SmallBasketItem from "../../components/TopMenuBasket/SmallBasketItem";
import { SmallBasketItemProps } from 'CustomPropsTypes';

export default {
    component: SmallBasketItem,
    title: 'Top Menu/Top Menu Basket',
    argTypes: {
        amount: {
            name: "Amount",
            type: { name: 'number', required: true },
            defaultValue: 20,
            description: 'Set Amount',
        },
        imagePath: {
            name: "imagePath",
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'Set imagePath',
            control: { type: 'text' },
        },
        name: {
            name: "Name",
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'Set Name',
            control: { type: 'text' },
        },
        id: {
            name: "ID",
            type: { name: 'number', required: true },
            defaultValue: 1,
            description: 'Set ID',
        },
        handleProductRemoved: {
            name: "handleProductRemoved",
            description: 'Set handleProductRemoved',
        }
    },
    parameters: {
        docs: {
            page:  SmallBasketItemCustomDocs
        }
    }
} as Meta;

const Template: Story<SmallBasketItemProps> = (args: SmallBasketItemProps) => <SmallBasketItem {...args} />;

export const DefaultBasketItem = Template.bind({});
DefaultBasketItem.args = {
    amount: 20,
    imagePath: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg",
    name: "Product Default",
    id: 1,
    handleProductRemoved: () => {}
}
