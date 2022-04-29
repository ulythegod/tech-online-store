import React from 'react';
import { Meta } from '@storybook/react';
import AdvantageItem from '../../components/AdvantagesSection/AdvantageItem';
import Support from '../../images/Support.png';

export default {
    component: AdvantageItem,
    title: 'Advantages Block/Advantage Item',
} as Meta;

export const Item = () => (
    <AdvantageItem 
        image={Support}
        name={"Product Support"}
        description={"Up to 3 years on-site warranty available for your peace of mind."}
    />
);