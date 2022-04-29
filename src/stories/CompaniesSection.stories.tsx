import React from "react";
import { Meta, Story } from "@storybook/react";
import CompaniesSectionCustomDocs from './CompaniesSectionCustomDocs.mdx';

import CompaniesSection from "../components/CompaniesSection/CompaniesSection";
import { CompaniesSectionProps } from 'CustomPropsTypes';

export default {
    component: CompaniesSection,
    title: 'Companies Section',
    parameters: {
        docs: {
            page: CompaniesSectionCustomDocs
        }
    },
    argTypes: {
        isInMenu: {
            name: "isInMenu",
            type: { name: 'boolean', required: true },
            defaultValue: false,
            description: 'Set isInMenu',
            table: {
                category: 'Section view',
            },
        }
    }
} as Meta;

const Template: Story<CompaniesSectionProps> = (args: CompaniesSectionProps) => <CompaniesSection {...args} />;

export const NormalSectionView = Template.bind({});
NormalSectionView.args = {
    isInMenu: false
};

export const MenuSectionView = Template.bind({});
MenuSectionView.args = {
    isInMenu: true
};
