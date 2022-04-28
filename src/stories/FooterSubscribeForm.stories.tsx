import React from "react";
import { Meta } from '@storybook/react';

import FooterSubscribeForm from "../components/Footer/FooterSubscribeForm";

export default {
    component: FooterSubscribeForm,
    title: 'Footer/Footer Subscribe Form',
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

export const Form = () => <FooterSubscribeForm />;