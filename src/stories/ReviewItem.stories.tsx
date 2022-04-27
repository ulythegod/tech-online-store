import React from "react";
import { Meta } from '@storybook/react';
import ReviewItem from "../components/ReviewsSection/ReviewItem";

export default {
    component: ReviewItem,
    title: 'Review Block/Review Item'
} as Meta;

export const Item = () => (
    <ReviewItem 
        text={
            `My first order arrived today in perfect condition.
            From the time I sent a question about the item to making 
            the purchase, to the shipping and now the delivery, your 
            company, Tecs, has stayed in touch.  Such great service.  
            I look forward to shopping on your site in the future and 
            would highly recommend it.`
        }
        author={"Tama Brown"}
    />
)