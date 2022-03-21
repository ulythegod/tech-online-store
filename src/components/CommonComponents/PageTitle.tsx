import React from 'react';
import styles from './pageTitle.module.scss';

function PageTitle(props: any): any {
    let className = "";

    if (props.isProductPage) {
        className = "page-title-product";
    } else {
        className = "page-title";
    }

    return (
        <h1 className={`${styles[className]}`}>{props.title}</h1>
    );
}

export default PageTitle
