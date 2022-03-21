import React from 'react';
import styles from './catalogFilterBanner.module.scss';

function CatalogFilterBanner(props: any): any {
    return (
        <a className={`${styles["banner"]}`} href={props.link}>
            <img src={props.image} alt="the icon series"/>
        </a>
    );
}

export default CatalogFilterBanner;