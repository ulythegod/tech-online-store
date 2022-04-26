import React from "react";
import { Story, Meta } from '@storybook/react';

import ProductItem from "../components/CatalogItem/ProductItem";
import { Product, ProductItemProps } from 'CustomTypes';

import { Provider } from "react-redux";

import { useSelector } from "react-redux";
import store, { RootState } from "../store";
import { fetchCategories } from '../features/categories/categoriesSlice';
import { fetchProducts, selectAllProducts } from '../features/products/productsSlice';

import AppProvider from '../components/AppProvider/AppProvider';

export default {
    component: ProductItem,
    title: 'Products/ProductItem'
} as Meta;

const Template: Story<ProductItemProps> = (args: ProductItemProps) => {return <ProductItem {...args} />};

export const Default = Template.bind({});
Default.args = {
    status: "in-stock",
    id: 1,
    productImage: "https://res.cloudinary.com/hgtfkfbcu/image/upload/v1610536303/1412333_v01_b_85705bb72d.jpg",
    reviewsCount: 5,
    name: "Product Default",
    price: 1234,
    discount: 123,
    isNewProducts: false
}