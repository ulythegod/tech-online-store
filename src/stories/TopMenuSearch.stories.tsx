import React from 'react';
import { Meta, Story } from '@storybook/react';

import TopMenuSearch from '../components/TopMenu/TopMenuSearch';
import { TopMenuSearchProps } from 'CustomTypes';

export default {
    component: TopMenuSearch,
    title: 'Top Menu/Top Menu Search'
} as Meta;

const Template: Story<TopMenuSearchProps> = (args: TopMenuSearchProps) => <TopMenuSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpenSearchPannel: false,
};

export const OpenedPannel = Template.bind({});
OpenedPannel.args = {
    isOpenSearchPannel: true,
};