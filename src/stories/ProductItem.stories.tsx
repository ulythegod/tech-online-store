import React from "react";
import { Story, Meta } from '@storybook/react';

import ProductItem from "../components/CatalogItem/ProductItem";
import { ProductItemProps } from 'CustomPropsTypes';

import { AppProvider } from '../components/AppProvider/AppProvider';

export default {
    component: ProductItem,
    title: 'Products/Product Item',
    decorators: [
        (story: Function) => {
            return (
               <AppProvider>
                    {story()}
                </AppProvider> 
            )
            
        }
    ]
} as Meta;

const Template: Story<ProductItemProps> = (args: ProductItemProps) => {return <ProductItem {...args} />};

export const Default = Template.bind({});
Default.args = {
    status: "in-stock",
    id: 1,
    productImage: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg",
    reviewsCount: 5,
    name: "Product Default",
    price: 1234,
    discount: 123,
    isNewProducts: false
}

export const CheckAvailabilityStatus = Template.bind({});
CheckAvailabilityStatus.args = {
    ...Default.args,
    name: "Product CheckAvailabilityStatus",
    status: "check-availability"
}

export const NewProductPreview = Template.bind({});
NewProductPreview.args = {
    ...Default.args,
    name: "Product NewProductPreview",
    isNewProducts: true
}

export const ProductWithRealData = Template.bind({});
ProductWithRealData.args = {
    ...Default.args,
    id: 47,
    productImage: "",
    name: "",
    price: 0,
    discount: 0,
    isUseFetch: true
}