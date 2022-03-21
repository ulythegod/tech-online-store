import React from 'react';
import styles from './pageTitle.module.scss';

function PageTitle(props: any): any {
    let className = "";

    if (!props.isCatalogPage) {
        className = "page-title";
    } else {
        className = "page-title-catalog";
    }

    return (
        <h1 className={`${styles[className]}`}>{props.title}</h1>
    );
}

export default PageTitle
