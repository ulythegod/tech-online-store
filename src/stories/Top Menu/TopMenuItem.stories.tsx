import React from "react";
import { Meta, Story } from "@storybook/react";

import TopMenuItem from "../../components/TopMenu/TopMenuItem";
import { TopMenuItemProps } from 'CustomPropsTypes';
import HoverMenu from "../../components/HoverMenu/HoverMenu";

import { AppProvider } from "../../components/AppProvider/AppProvider";
import { Category } from "CustomTypes";

export default {
    component: TopMenuItem,
    title: 'Top Menu/Top Menu Item',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ]
} as Meta;

const Template: Story<TopMenuItemProps> = (args: TopMenuItemProps) => <TopMenuItem {...args} />;

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
    renderHoverMenu: <></>,
    id: 1,
    isHidden: false,
    text: "Laptops",
    link: "#"
};

export const ItemWithHoverMenu = Template.bind({});
ItemWithHoverMenu.args = {
    renderHoverMenu: <HoverMenu 
        categoryId={7}
        subCategories={subCategories}
    />,
    id: 7,
    isHidden: false,
    text: "Desktop PCs",
    link: `/catalog/7`
};
