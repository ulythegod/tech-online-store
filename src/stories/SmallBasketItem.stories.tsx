import React from "react";
import { Meta, Story } from '@storybook/react';

import SmallBasketItem from "../components/TopMenuBasket/SmallBasketItem";
import { SmallBasketItemProps } from 'CustomPropsTypes';

export default {
    component: SmallBasketItem,
    title: 'Top Menu/Top Menu Basket'
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
