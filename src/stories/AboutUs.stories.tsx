import React from 'react';
import { Meta } from '@storybook/react';

import AboutUsBlocks  from '../components/AboutUsBlocks/AboutUsBlocks';

export default {
    component: AboutUsBlocks,
    title: 'About Us/About us blocks list'
} as Meta;

export const AboutUs = () => <AboutUsBlocks />;