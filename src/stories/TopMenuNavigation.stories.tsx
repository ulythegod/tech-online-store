import React from "react";
import { Meta, Story } from "@storybook/react";

import TopMenuNavigation from "../components/TopMenu/TopMenuNavigation";
import { TopMenuNavigationProps } from 'CustomTypes';

export default {
    component: TopMenuNavigation,
    title: 'Top Menu/Top Menu Navigation'
} as Meta;

const Template: Story<TopMenuNavigationProps> = (args: TopMenuNavigationProps) => <TopMenuNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpenSearchPannel: false,
    categories: []
}