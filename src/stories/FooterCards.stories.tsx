import React from "react";
import { Meta } from "@storybook/react";

import FooterCards from "../components/Footer/FooterCards";

export default {
    component: FooterCards,
    title: 'Footer/Footer Cards',
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

export const Cards = () => <FooterCards />;