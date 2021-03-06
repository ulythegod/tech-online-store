import React, { ReactElement } from "react";
import { Meta, Story } from '@storybook/react';
import TopMenuBasketCustomDocs from './TopMenuBasketCustomDocs.mdx';

import { userEvent, within } from '@storybook/testing-library';

import TopMenuBasket from "../../components/TopMenuBasket/TopMenuBasket";
import { TopMenuBasketProps } from 'CustomPropsTypes';
import SmallBasketItem from "../../components/TopMenuBasket/SmallBasketItem";

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: TopMenuBasket,
    title: 'Top Menu/Top Menu Basket',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ],
    argTypes: {
        basketItems: {
            name: "basketItems",
            description: "Set basketItems Array",
            defaultValue: []
        }
    },
    parameters: {
        docs: {
            page: TopMenuBasketCustomDocs
        }
    }
} as Meta;

const Template: Story<TopMenuBasketProps> = (args: TopMenuBasketProps) => <TopMenuBasket {...args} />;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByRole("basket-amount"));
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
export const FullBasket = Template.bind({});
FullBasket.args = {
    basketItems: basketItems
};

FullBasket.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByRole("basket-amount"));
};