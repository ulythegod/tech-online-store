import React from "react";
import { Meta, Story } from "@storybook/react";

import CompaniesSection from "../components/CompaniesSection/CompaniesSection";
import { CompaniesSectionProps } from 'CustomTypes';

export default {
    component: CompaniesSection,
    title: 'Companies Section'
}

const Template: Story<CompaniesSectionProps> = (args: CompaniesSectionProps) => <CompaniesSection {...args} />;

export const NormalSectionView = Template.bind({});
NormalSectionView.args = {
    isInMenu: false
};

export const MenuSectionView = Template.bind({});
MenuSectionView.args = {
    isInMenu: true
};