import React from 'react';
import { Meta } from '@storybook/react';
import LogoBanner from '../components/Banners/logoBanner';

export default {
    component: LogoBanner,
    title: 'Banners/Zip Banner'
} as Meta;

export const ZipBanner = () => <LogoBanner />;