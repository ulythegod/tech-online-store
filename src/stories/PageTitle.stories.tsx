import React from 'react';
import { Story, Meta } from '@storybook/react';
import PageTitleCustomDocs from './PageTitleCustomDocs.mdx';

import PageTitle from '../components/PageTitle/PageTitle';
import { PageTitleProps } from 'CustomPropsTypes';

export default {
    component: PageTitle,
    title: 'Page Title',
    argTypes: {
        title: {
            name: "Title",
            type: { name: 'string', required: true },
            defaultValue: "Title",
            description: 'Set Title',
            table: {
                category: 'Title Text',
            },
            control: { type: 'text' },
        },
        isCatalogPage: {
            name: "isCatalogPage",
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Set isCatalogPage',
            table: {
                category: 'Title Style',
            },
        },
        isProductPage: {
            name: "isProductPage",
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Set isProductPage',
            table: {
                category: 'Title Style',
            },
        },
        isCheckoutPage: {
            name: "isCheckoutPage",
            type: { name: 'boolean', required: false },
            defaultValue: false,
            description: 'Set isCheckoutPage',
            table: {
                category: 'Title Style',
            },
        },
    },
    parameters: {
        docs: {
            page: PageTitleCustomDocs
        }
    }
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