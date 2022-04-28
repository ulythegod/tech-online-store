import React from "react";
import { Meta, Story } from "@storybook/react";

import CompaniesSection from "../components/CompaniesSection/CompaniesSection";
import { CompaniesSectionProps } from 'CustomPropsTypes';

export default {
    component: CompaniesSection,
    title: 'Companies Section'
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
