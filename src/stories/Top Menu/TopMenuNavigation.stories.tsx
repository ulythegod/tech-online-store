import React from "react";
import { Meta, Story } from "@storybook/react";

import TopMenuNavigation from "../../components/TopMenu/TopMenuNavigation";
import { TopMenuNavigationProps } from 'CustomPropsTypes';

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: TopMenuNavigation,
    title: 'Top Menu/Top Menu Navigation',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ]
} as Meta;

const Template: Story<TopMenuNavigationProps> = (args: TopMenuNavigationProps) => <TopMenuNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpenSearchPannel: false,
    categories: []
};
