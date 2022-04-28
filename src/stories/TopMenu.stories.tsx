import React from "react";
import { Meta } from '@storybook/react';

import TopMenu from "../components/TopMenu/TopMenu";

import { AppProvider } from "../components/AppProvider/AppProvider";

export default {
    component: TopMenu,
    title: 'Top Menu/Top Menu All',
    decorators: [
        (story: any) => (
            <AppProvider>
                {story()}
            </AppProvider>
        )
    ],
} as Meta;

export const Default = () => <TopMenu />;
