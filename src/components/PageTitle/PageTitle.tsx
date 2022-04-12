import React from 'react';
import styles from './pageTitle.module.scss';

type Props = {
    isCatalogPage?: boolean,
    isProductPage?: boolean,
    isCheckoutPage?: boolean,
    title: string
}

function PageTitle(props: Props) {
    let className = "";

    if (props.isCatalogPage && !props.isProductPage && !props.isCheckoutPage) {
        className = "page-title-catalog";
    } else if (!props.isCatalogPage && props.isProductPage && !props.isCheckoutPage) {
        className = "page-title-product";
    } else if (!props.isCatalogPage && !props.isProductPage && props.isCheckoutPage) { 
        className = "page-title-checkout";
    } else {
        className = "page-title";
    }

    return (
        <h1 className={`${styles[className]}`}>{props.title}</h1>
    );
}

export default PageTitle
