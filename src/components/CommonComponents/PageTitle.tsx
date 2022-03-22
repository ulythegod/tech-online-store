import React from 'react';
import styles from './pageTitle.module.scss';

function PageTitle(props: any): any {
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
