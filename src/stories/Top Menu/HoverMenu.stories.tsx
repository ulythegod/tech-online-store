import React from "react";
import { Meta, Story } from '@storybook/react';
import HoverMenuCustomDocs from './HoverMenuCustomDocs.mdx';

import HoverMenu from "../../components/HoverMenu/HoverMenu";
import { HoverMenuProps } from 'CustomPropsTypes';

import { AppProvider } from "../../components/AppProvider/AppProvider";
import { Category } from "CustomTypes";

export default {
    component: HoverMenu,
    title: 'Top Menu/Hover Menu',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ],
    argTypes: {
        categoryId: {
            name: "categoryId",
            type: { name: 'number', required: true },
            defaultValue: "",
            description: 'Set Category Id',
            table: {
                category: 'Hover Menu Props',
            },
        },
        subCategories: {
            name: "subCategories",
            description: 'Set subCategories Array',
            table: {
                category: 'Hover Menu Props',
            },
        },
    },
    parameters: {
        docs: {
            page: HoverMenuCustomDocs
        }
    }
} as Meta;

const Template: Story<HoverMenuProps> = (args: HoverMenuProps) => <HoverMenu {...args} />;

const subCategories: Category[] = [
    {
        id: 41,
        created_at: "2021-01-13T10:59:29.479Z",
        updated_at: "2021-01-13T11:15:09.363Z",
        name: "Gaming PCs",
        parent: null,
        image: {
            id: 1,
            url: ""
        },
        subCategories: []
    },
    {
        id: 42,
        created_at: "2021-01-13T10:59:52.331Z",
        updated_at: "2021-01-13T11:15:09.363Z",
        name: "Office PCs",
        parent: null,
        image: {
            id: 1,
            url: ""
        },
        subCategories: []
    }
];

export const Default = Template.bind({});
Default.args = {
    categoryId: 7,
    subCategories: subCategories
}