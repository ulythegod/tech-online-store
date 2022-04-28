import React from "react";
import { Story, Meta } from '@storybook/react';

import ProductItem from "../../components/CatalogItem/ProductItem";
import CatalogProductsList from "../../components/Catalog/CatalogProductsList";
import CatlogItemHorizontal from "../../components/CatalogItem/CatlogItemHorizontal";
import { CatalogProductsListProps } from 'CustomPropsTypes';

import { AppProvider } from '../../components/AppProvider/AppProvider';

export default {
    component: ProductItem,
    title: 'Products Lists/Catalog Products List',
    decorators: [
        (story: Function) => {
            return (
               <AppProvider>
                    {story()}
                </AppProvider> 
            )
            
        }
    ]
} as Meta;

const Template: Story<CatalogProductsListProps> = (args: CatalogProductsListProps) => <CatalogProductsList {...args} />;

const productsItems: any [] = [
    <ProductItem 
        status={"check-availability"}
        id={47}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={36}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={31}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={7}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={30}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={47}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={36}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={31}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={7}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
    <ProductItem 
        status={"check-availability"}
        id={30}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isNewProducts={false}
        isUseFetch={true}
    />,
];

export const TableView = Template.bind({});
TableView.args = {
    view: "table",
    productsItems: productsItems
};

const productsItemsHorizontal: any[] = [
    <CatlogItemHorizontal 
        status={"check-availability"}
        id={47}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isUseFetch={true} 
        model={"SKU D5515AI"} 
        specs={[]}    
    />,
    <CatlogItemHorizontal 
        status={"check-availability"}
        id={36}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isUseFetch={true}
        model={"SKU D5515AI"} 
        specs={[]}
    />,
    <CatlogItemHorizontal 
        status={"check-availability"}
        id={31}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isUseFetch={true}
        model={"SKU D5515AI"} 
        specs={[]}
    />,
    <CatlogItemHorizontal 
        status={"check-availability"}
        id={7}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isUseFetch={true}
        model={"SKU D5515AI"} 
        specs={[]}
    />,
    <CatlogItemHorizontal 
        status={"check-availability"}
        id={30}
        productImage={""}
        reviewsCount={5}
        name={""}
        price={0}
        discount={0}
        isUseFetch={true}
        model={"SKU D5515AI"} 
        specs={[]}
    />,
];

export const ColumnView = Template.bind({});
ColumnView.args = {
    view: "column",
    productsItems: productsItemsHorizontal
};