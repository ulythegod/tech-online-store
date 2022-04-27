import React from "react";
import { Meta } from "@storybook/react";

import Footer from "../components/Footer/Footer";

import { AppProvider } from "@/components/AppProvider/AppProvider";

export default {
    component: Footer,
    title: 'Footer/Footer all'
} as Meta;

export const Default = () => <Footer />;