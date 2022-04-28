import React from "react";
import { Meta } from '@storybook/react';

import ProductSection from "../../components/CatalogSections/NewProductsSection";
import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: ProductSection,
    title: 'Products Lists/New Products Section',
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

export const NewProductsSection = () => <ProductSection name="New Products" />;