import React from "react";
import { Meta, Story } from "@storybook/react";

import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { BreadcrumbsProps } from 'CustomPropsTypes';

export default {
    component: Breadcrumbs,
    title: 'Breadcrumbs',
} as Meta;

const Template: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => <Breadcrumbs {...args} />;

export const LowLevelCategoryBreadcrumbs = Template.bind({});
LowLevelCategoryBreadcrumbs.args = {
    category: {
        id: 44,
        subCategories: [],
        parent: {
            id: 43,
            subCategories: [],
            parent: null,
            name: "Second Level subcategory",
            created_at: "2022-04-08T10:02:42.853Z",
            updated_at: "2022-04-08T10:04:51.474Z",
            image: {
                id: 0,
                url: ""
            }
        },
        name: "Third level Category",
        created_at: "2022-04-08T10:03:31.221Z",
        updated_at: "2022-04-08T10:04:51.472Z",
        image: {
            id: 0,
            url: ""
        }
    }
};

export const HighLevelCategoryBreadcrumbs = Template.bind({});
HighLevelCategoryBreadcrumbs.args = {
    category: {        
        id: 6,
        subCategories: [],
        parent: null,
        name: "Laptops",
        created_at: "2020-12-21T08:53:44.832Z",
        updated_at: "2021-01-13T11:16:51.833Z",
        image: {
            id: 0,
            url: ""
        }
    }
};

export const BreadcrumbsWithoutCategories = Template.bind({});
BreadcrumbsWithoutCategories.args = {
    category: undefined
}