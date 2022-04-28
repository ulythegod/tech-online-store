import React from "react";
import { Meta } from "@storybook/react";

import HeaderTime from "../../components/Header/HeaderTime";

export default {
    component: HeaderTime,
    title: 'Header/Header Time Block',
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

export const HeaderTimeBlock = () => <HeaderTime />;