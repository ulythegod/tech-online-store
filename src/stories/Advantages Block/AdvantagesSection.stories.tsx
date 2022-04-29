import React from 'react';
import { Story, Meta } from '@storybook/react';

import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
import { AdvantagesSectionProps } from 'CustomPropsTypes';

export default {
    component: AdvantagesSection,
    title: 'Advantages Block/Advantage Section',
    argTypes: {
        isBackground: {
            name: "isBackground",
            type: { name: 'boolean', required: true },
            defaultValue: false,
            description: 'Set isBackground',
        }
    }
} as Meta;

const Template: Story<AdvantagesSectionProps> = (args: AdvantagesSectionProps) => <AdvantagesSection {...args} />;

export const Light = Template.bind({});
Light.args = {
    isBackground: false
};

export const WithBackground = Template.bind({});
WithBackground.args = {
    isBackground: true
};