import React from "react";
import { Meta, Story } from '@storybook/react';

import FooterMenuItem from "../components/Footer/FooterMenuItem";
import { FooterMenuItemProps } from 'CustomPropsTypes';

export default {
    component: FooterMenuItem,
    title: 'Footer/Footer Menu Item',
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

const Template: Story<FooterMenuItemProps> = (args: FooterMenuItemProps) => <FooterMenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "Information",
    items: (
        <>
            <li><a href="#">About Us</a></li>
            <li><a href="#">About Zip</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Orders and Returns</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Advanced Search</a></li>
            <li><a href="#">Newsletter Subscription</a></li>
        </>
    ),
};

export const Contacts = Template.bind({});
Contacts.args = {
    name: "Address",
    items: (
        <>
            <li>Address: 1234 Street Adress City Address, 1234</li>
            <li>Phones: <a href="tel:00-1234-5678">(00) 1234 5678</a></li>
            <li>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
            <li>Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 11:00 AM - 5:00 PM</li>
            <li>E-mail: <a href="mailto:shop@email.com">shop@email.com</a></li>
        </>
    ),
    isContacts: true
};