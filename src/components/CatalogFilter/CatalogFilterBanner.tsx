import React from 'react';
import styles from './catalogFilterBanner.module.scss';

type Props = {
    link: string,
    image: string
}

function CatalogFilterBanner(props: Props) {
    return (
        <a className={`${styles["banner"]}`} href={props.link}>
            <img src={props.image} alt="the icon series"/>
        </a>
    );
}

export default CatalogFilterBanner;