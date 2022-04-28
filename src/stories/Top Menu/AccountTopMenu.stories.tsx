import React from "react";
import { Meta } from '@storybook/react';

import AccountTopMenu from "../../components/AccountTopMenu/AccountTopMenu";

export default {
    component: AccountTopMenu,
    title: 'Top Menu/Account Top Menu'
} as Meta;

export const AvatarTopMenu = () => <AccountTopMenu />;