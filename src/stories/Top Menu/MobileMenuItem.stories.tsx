import React from "react";
import { Meta, Story } from '@storybook/react';
import MobileMenuItemCustomDocs from './MobileMenuItemCustomDocs.mdx';

import MobileMenuItem from "../../components/MobileMenu/MobileMenuItem";
import { MobileMenuItemProps } from 'CustomPropsTypes';
import { Category } from "CustomTypes";

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: MobileMenuItem,
    title: 'Top Menu/Mobile Menu',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ],
    parameters: {
        docs: {
            page: MobileMenuItemCustomDocs
        }
    },
    argTypes: {
        id: {
            name: "ID",
            type: { name: 'number', required: true },
            description: 'Set ID',
        },
        name: {
            name: "Name",
            type: { name: 'string', required: true },
            defaultValue: "Name",
            description: 'Set Name',
            control: { type: 'text' },
        },
        subCategories: {
            name: "subCategories",
            description: 'Set subCategories Array',
        }
    }
} as Meta;

const Template: Story<MobileMenuItemProps> = (args: MobileMenuItemProps) => <MobileMenuItem {...args} />;

export const DefaultItem = Template.bind({});
DefaultItem.args = {
    id: 6,
    name: "Laptops",
    subCategories: []
};

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

export const SecondLevelItem = Template.bind({});
SecondLevelItem.args = {
    id: 7,
    name: "Desktop PCs",
    subCategories: subCategories
};

const subCategoriesThirdLevel: Category[] = [
    {
        id: 36,
        created_at: "2020-12-21T09:54:45.773Z",
        updated_at: "2021-01-13T11:16:51.828Z",
        name: "Everyday Use Notebooks",
        parent: null,
        image: {
            id: 1,
            url: ""
        },
        subCategories: []
    },
    {
        id: 37,
        created_at: "2020-12-21T09:55:47.997Z",
        updated_at: "2021-01-13T11:16:51.828Z",
        name: "Netbooks",
        parent: null,
        image: {
            id: 1,
            url: ""
        },
        subCategories: [
            {
                id: 43,
                created_at: "2022-04-08T10:02:42.853Z",
                updated_at: "2022-04-08T10:04:51.474Z",
                name: "Second Level subcategory",
                parent: null,
                image: {
                    id: 1,
                    url: ""
                },
                subCategories: [
                    {
                        id: 44,
                        created_at: "2022-04-08T10:03:31.221Z",
                        updated_at: "2022-04-08T10:04:51.472Z",
                        name: "Third level Category",
                        parent: null,
                        image: {
                            id: 1,
                            url: ""
                        },
                        subCategories: []
                    }
                ]
            },
            {
                id: 45,
                created_at: "2022-04-08T10:41:59.922Z",
                updated_at: "2022-04-08T10:42:15.301Z",
                name: "Second Level subcategory 2",
                parent: null,
                image: {
                    id: 1,
                    url: ""
                },
                subCategories: []
            },
        ]
    },
    {
        id: 38,
        created_at: "2020-12-21T09:56:04.611Z",
        updated_at: "2021-01-13T11:16:51.828Z",
        name: "Gaming notebooks",
        parent: null,
        image: {
            id: 1,
            url: ""
        },
        subCategories: []
    },
];

export const ThirdLevelItem = Template.bind({});
ThirdLevelItem.args = {
    id: 7,
    name: "Laptops",
    subCategories: subCategoriesThirdLevel
};
