import React from 'react';
import { Meta, Story } from '@storybook/react';

import ProductSection from '../components/CatalogSections/ProductsSection';
import { ProductsSectionProps } from 'CustomTypes';

import { AppProvider } from '../components/AppProvider/AppProvider';

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
    ]
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