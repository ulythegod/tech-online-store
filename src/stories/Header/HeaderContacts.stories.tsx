import React from "react";
import { Meta } from "@storybook/react";

import HeaderContacts from "../../components/Header/HeaderContacts";

export default {
    component: HeaderContacts,
    title: 'Header/Header Contacts Block',
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

export const Default = () => <HeaderContacts />;