import React from "react";
import { Meta } from "@storybook/react";

import Header from "../components/Header/Header";

export default {
    component: Header,
    title: 'Header/Header all'
} as Meta;

export const Deafult = () => <Header />;