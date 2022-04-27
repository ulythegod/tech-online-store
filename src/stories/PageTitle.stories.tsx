import React from 'react';
import { Story, Meta } from '@storybook/react';

import PageTitle from '../components/PageTitle/PageTitle';
import { PageTitleProps } from 'CustomTypes';

export default {
    component: PageTitle,
    title: 'Page Title'
} as Meta;

const Template: Story<PageTitleProps> = (args: PageTitleProps) => <PageTitle {...args} />;

export const CatalogPageTitle = Template.bind({});
CatalogPageTitle.args = {
    isCatalogPage: true,
    title: "Catalog Page Title"
};

export const ProductPageTitle = Template.bind({});
ProductPageTitle.args = {
    isProductPage: true,
    title: "Product Page Title"
};

export const CheckoutPageTitle = Template.bind({});
CheckoutPageTitle.args = {
    isCheckoutPage: true,
    title: "Checkout Page Title"
};