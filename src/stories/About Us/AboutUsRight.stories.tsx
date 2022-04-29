import React from "react";
import { Meta, Story } from '@storybook/react';
import AboutUsRightCustomDocs from './AboutUsRightCustomDocs.mdx'

import AboutUsRight from "../../components/Banners/RightPictureBanner";
import { AboutUsBlockProps } from 'CustomPropsTypes';
import au1 from '../../images/about-us1.png';
import aui1 from '../../images/about-us-sign1.png';

export default {
    component: AboutUsRight,
    title: 'About Us/About us right block',
    parameters: {
        docs: {
            page: AboutUsRightCustomDocs
        }
    },
    argTypes: {
        image: {
            name: "Image",
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'Set Image',
            table: {
                category: 'Images',
            },
            control: { type: 'text' },
        },
        title: {
            name: "Title",
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'Set Title',
            table: {
                category: 'Texts',
            },
            control: { type: 'text' },
        },
        description: {
            name: "Description",
            type: { name: 'string', required: true },
            defaultValue: "",
            description: 'Set Description',
            table: {
                category: 'Texts',
            },
        },
        icon: {
            name: "Icon",
            type: { name: 'string', required: false },
            defaultValue: "",
            description: 'Set Icon',
            table: {
                category: 'Images',
            },
            control: { type: 'text' },
        },
    }
} as Meta;

const Template: Story<AboutUsBlockProps> = (args: AboutUsBlockProps) => <AboutUsRight {...args} />;

export const Default = Template.bind({});
Default.args = {
    image: au1,
    title: "A Family That Keeps On Growing",
    description: <>
        <p>
            We always aim to please the home market, supplying 
            great computers and hardware at great prices to 
            non-corporate customers, through our large Melbourne 
            CBD showroom and our online store.
        </p>
        <p>
            Shop management approach fosters a strong customer 
            service focus in our staff. We prefer to cultivate 
            long-term client relationships rather than achieve 
            quick sales, demonstrated in the measure of our 
            long-term success.
        </p>
    </>
};

export const RightBlockWithIcon = Template.bind({});
RightBlockWithIcon.args = {
    ...Default.args,
    icon: aui1
};