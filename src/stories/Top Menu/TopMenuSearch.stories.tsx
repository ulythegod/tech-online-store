import React from 'react';
import { Meta, Story } from '@storybook/react';
import TopMenuSearchCustomDocs from './TopMenuSearchCustomDocs.mdx';

import TopMenuSearch from '../../components/TopMenu/TopMenuSearch';
import { TopMenuSearchProps } from 'CustomPropsTypes';

export default {
    component: TopMenuSearch,
    title: 'Top Menu/Top Menu Search',
    argTypes: {
        isOpenSearchPannel: {
            name: "isOpenSearchPannel",
            type: { name: 'boolean', required: true },
            defaultValue: false,
            description: 'Set isOpenSearchPannel',
        }
    },
    parameters: {
        docs: {
            page: TopMenuSearchCustomDocs
        }
    }
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