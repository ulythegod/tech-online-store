import React from "react";
import { Meta } from '@storybook/react';

import PromotedCategories from "../../components/PromotedCategories/PromotedCategories";

import { AppProvider } from '../../components/AppProvider/AppProvider';

export default {
    component: PromotedCategories,
    title: 'Products Lists/Promoted Categories',
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

export const CategoriesList = () => <PromotedCategories />;