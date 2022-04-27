import React from 'react';
import { Story, Meta } from '@storybook/react';

import RoundButton from '../components/Buttons/RoundButton';
import { ReactComponent as ProductMail } from '../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../images/product-fav.svg';
import { ReactComponent as DeleteItem } from '../images/card-delete-item.svg';
import { ReactComponent as EditItem } from '../images/card-edit-item.svg';

export default {
    component: RoundButton,
    title: 'Buttons/Round Button',
}

export const RoundButtons = () => (
    <div>
        <RoundButton content={<ProductMail />} />
        <RoundButton content={<ProductRating />} />
        <RoundButton content={<ProductFav />} />
        <RoundButton content={<DeleteItem />} />
        <RoundButton content={<EditItem />} />
    </div>
);