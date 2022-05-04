import React from "react";
import { Meta } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import AccountTopMenu from "../../components/AccountTopMenu/AccountTopMenu";

export default {
    component: AccountTopMenu,
    title: 'Top Menu/Account Top Menu'
} as Meta;

export const AvatarTopMenu = () => <AccountTopMenu />;
AvatarTopMenu.play = async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
};