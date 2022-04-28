import React from "react";
import { Story, Meta } from "@storybook/react";

import CatlogItemHorizontal from "../../components/CatalogItem/CatlogItemHorizontal";
import { CatlogItemHorizontalProps } from 'CustomPropsTypes';

import { AppProvider } from '../../components/AppProvider/AppProvider';

export default {
    component: CatlogItemHorizontal,
    title: 'Products/Catlog Item Horizontal',
    decorators: [
        (story: any) => {
            return (
               <AppProvider>
                    {story()}
                </AppProvider> 
            )
            
        }
    ]
} as Meta;

const Template: Story<CatlogItemHorizontalProps> = (args: CatlogItemHorizontalProps) => <CatlogItemHorizontal {...args} />

export const Default = Template.bind({});
Default.args = {
    status: "in-stock",
    productImage: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg",
    model: "SKU D5515AI",
    name: 'Default Product',
    price: 123,
    discount: 123,
    specs: [
        {
          "id": 10,
          "spec": "CPU",
          "value": "N/A"
        },
        {
            "id": 11,
            "spec": "Featured",
            "value": "N/A"
        },
        {
            "id": 12,
            "spec": "I/O Ports",
            "value": "N/A"
        },
    ],
    reviewsCount: 5,
    id: 1,
}

export const CheckAvailabilityStatus = Template.bind({});
CheckAvailabilityStatus.args = {
    ...Default.args,
    name: "Product CheckAvailabilityStatus",
    status: "check-availability"
}

export const ProductWithoutSpecs = Template.bind({});
ProductWithoutSpecs.args = {
    ...Default.args,
    name: "Product ProductWithoutSpecs",
    specs: []
}

export const ProductWithRealData = Template.bind({});
ProductWithRealData.args = {
    ...Default.args,
    productImage: "",
    name: '',
    price: 0,
    discount: 0,
    specs: [],
    id: 47,
    isUseFetch: true
}