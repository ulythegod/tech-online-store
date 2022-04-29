import React from "react";
import { Meta, Story } from "@storybook/react";
import FormItemTextCustomDocs from './FormItemTextCustomDocs.mdx';

import FormItemText from "../components/FormItem/FormItemText";
import { FormItemTextProps } from 'CustomPropsTypes';

export default {
    component: FormItemText,
    title: 'Form Item Text',
    parameters: {
        docs: {
            page: FormItemTextCustomDocs
        }
    }
} as Meta;

const Template: Story<FormItemTextProps> = (args: FormItemTextProps) => <FormItemText {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Your email",
    required: true,
    type: "email",
    placeholder: "Your email",
    id: "email"
};

export const NotRequired = Template.bind({});
NotRequired.args = {
    ...Default.args,
    required: false
};

export const WithInputMask = Template.bind({});
WithInputMask.args = {
    label: "Your phone",
    required: true,
    type: "text",
    placeholder: "Your phone",
    id: "phone",
    mask: "+7 (999) 999-99-99"
};

export const Narrow = Template.bind({});
Narrow.args = {
    ...Default.args,
    isNarrow: true
};
