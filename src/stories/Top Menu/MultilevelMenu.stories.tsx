import React from "react";
import { Meta, Story } from '@storybook/react';

import MultilevelMenu from "../../components/MultilevelMenu/MultilevelMenu";
import { MultilevelMenuProps } from 'CustomPropsTypes';

import { AppProvider } from "../../components/AppProvider/AppProvider";
import { Category } from "CustomTypes";

export default {
    component: MultilevelMenu,
    title: 'Top Menu/Multilevel Menu',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ]
} as Meta;

const Template: Story<MultilevelMenuProps> = (args: MultilevelMenuProps) => <MultilevelMenu {...args} />;

const subCategories: Category[] = [
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

export const ThirdLevelMenu = Template.bind({});
ThirdLevelMenu.args = {
    subCategories: subCategories
};

const subCategoriesSecondLevel: Category[] = [
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
                subCategories: []
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

export const SecondLevelMenu = Template.bind({});
SecondLevelMenu.args = {
    subCategories: subCategoriesSecondLevel
};

const subCategoriesOneLevel: Category[] = [
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

export const OneLevelMenu = Template.bind({});
OneLevelMenu.args = {
    subCategories: subCategoriesOneLevel
};