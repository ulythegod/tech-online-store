import React from 'react';
import styles from './singleBanner.module.scss';

function SingleBanner(props: any): any {
    return (
        <section className={`${styles["banner-section"]}`}>
            <a href="/catalog"><img src={props.image} alt="Catalog" /></a>
        </section>
    );
}

export default SingleBanner;
