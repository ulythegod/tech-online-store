import React from "react";
import { Meta, Story } from '@storybook/react';
import MobileMenuCustomDocs from './MobileMenuCustomDocs.mdx';

import MobileMenu from "../../components/MobileMenu/MobileMenu";
import { MobileMenuProps } from "CustomPropsTypes";

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: MobileMenu,
    title: 'Top Menu/Mobile Menu',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ],
    parameters: {
        backgrounds: {
            default: 'black',
            values: [
              {
                name: 'black',
                value: '#000',
              },
              {
                name: 'dark blue',
                value: '#0156FF',
              },
            ],
        },
        docs: {
            page: MobileMenuCustomDocs
        }
    },
    argTypes: {
        categories: {
            name: "Categories",
            description: 'Set Categories Array',
        }
    },
} as Meta;

const Template: Story<MobileMenuProps> = (args: MobileMenuProps) => <MobileMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    categories: []
};
