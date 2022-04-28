import React from "react";
import { Meta, Story } from '@storybook/react';

import MultilevelMenuItem from "../components/MultilevelMenu/MultilevelMenuItem";
import { MultilevelMenuItemProps } from 'CustomPropsTypes';

import { AppProvider } from "../components/AppProvider/AppProvider";

export default {
    component: MultilevelMenuItem,
    title: 'Top Menu/Multilevel Menu Item',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ]
} as Meta;

const Template: Story<MultilevelMenuItemProps> = (args: MultilevelMenuItemProps) => <MultilevelMenuItem {...args} />;

export const FirstLevelItem = Template.bind({});
FirstLevelItem.args = {
    level: 1,
    id: 37,
    name: "NetBooks"
};

export const SecondLevelItem = Template.bind({});
SecondLevelItem.args = {
    level: 2,
    id: 43,
    name: "Second Level subcategory"
};

export const ThirdLevelItem = Template.bind({});
ThirdLevelItem.args = {
    level: 3,
    id: 44,
    name: "Third level Category"
};