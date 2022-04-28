import React from "react";
import { Meta } from '@storybook/react';

import MenuList from "../components/AccountTopMenu/MenuList";

export default {
    component: MenuList,
    title: 'Top Menu/Account Top Menu'
} as Meta;

export const AccountTopMenuList = () => <MenuList />;
