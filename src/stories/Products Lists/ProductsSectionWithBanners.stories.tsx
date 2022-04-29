import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductSectionCustomDocs from './ProductSectionCustomDocs.mdx';

import ProductSection from '../../components/CatalogSections/ProductsSection';
import { ProductsSectionProps } from 'CustomPropsTypes';

import { AppProvider } from '../../components/AppProvider/AppProvider';

export default {
    component: ProductSection,
    title: 'Products Lists/Product Section With Banner',
    decorators: [
        (story: Function) => {
            return (
               <AppProvider>
                    {story()}
                </AppProvider> 
            )
            
        }
    ],
    argTypes: {
        id: {
            name: "ID",
            type: { name: 'number', required: true },
            defaultValue: "",
            description: 'Set ID',
        },
        name: {
            name: "Name",
            type: { name: 'string', required: true },
            defaultValue: "Name",
            description: 'Set Name',
            control: { type: 'text' },
        },
        banner: {
            name: "Banner",
            type: { name: 'string', required: true },
            defaultValue: "Banner",
            description: 'Set Banner',
            control: { type: 'text' },
        }
    },
    parameters: {
        docs: {
            page: ProductSectionCustomDocs
        }
    }
} as Meta;

const Template: Story<ProductsSectionProps> = (args: ProductsSectionProps) => {return <ProductSection {...args} />};

export const Default = Template.bind({});
Default.args = {
    id: 6,
    name: "Laptops",
    banner: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610535201/image_30_5_b4b6c23a44.png"
};

export const SectionWithoutSubsections = Template.bind({});
SectionWithoutSubsections.args = {
    id: 39,
    name: "Custom Builds",
    banner: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610535201/image_30_5_b4b6c23a44.png"
};