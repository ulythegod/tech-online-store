import React, { ReactElement } from "react";
import { Meta, Story } from '@storybook/react';

import SmallBasket from "../../components/TopMenuBasket/SmallBasket";
import { SmallBasketProps } from 'CustomPropsTypes';
import SmallBasketItem from "../../components/TopMenuBasket/SmallBasketItem";

import { AppProvider } from "@/components/AppProvider/AppProvider";

export default {
    component: SmallBasket,
    title: 'Top Menu/Basket Popup'
} as Meta;

const Template: Story<SmallBasketProps> = (args: SmallBasketProps) => <SmallBasket {...args} />;

export const EmptyPopup = Template.bind({});
EmptyPopup.args = {
    basketItems: [],
    handleMovingToCard: () => {},
    subtotal: 0
};


const basketItems: ReactElement<any, any>[] = [
    <SmallBasketItem
        key={1}
        amount={20}
        imagePath={"https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg"}
        name={"Product Default"}
        id={1}
        handleProductRemoved={() => {}}
        isFirstChild={true}
    />,
    <SmallBasketItem 
        key={2}
        amount={100}
        imagePath={"https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg"}
        name={"Product Default 2"}
        id={2}
        handleProductRemoved={() => {}}
    />,
    <SmallBasketItem
        key={3}
        amount={2}
        imagePath={"https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg"}
        name={"Product Default 3"}
        id={3}
        handleProductRemoved={() => {}}
    />,
];
export const FullBasketPopup = Template.bind({});
FullBasketPopup.args = {
    basketItems: basketItems,
    handleMovingToCard: () => {},
    subtotal: 12345
};
