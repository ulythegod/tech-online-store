import React from "react";
import { Meta, Story } from '@storybook/react';


import FooterMenu from "../../components/Footer/FooterMenu";

import { AppProvider } from "../../components/AppProvider/AppProvider";

export default {
    component: FooterMenu,
    title: 'Footer/Footer Menu',
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
    }
} as Meta;

const Template: Story = () => <FooterMenu />;

export const Default = Template.bind({});
Default.decorators = [
    (story: any) => (
        <AppProvider>
            {story()}
        </AppProvider>
    ),
];
