import React from 'react';
import styles from './singleBanner.module.scss';

type Props = {
    image: string
}

function SingleBanner(props: Props) {
    return (
        <section className={`${styles["banner-section"]}`}>
            <a className={`${styles["catalog-banner"]}`} href="#">
                <img src={props.image} alt="Catalog" />
            </a>
        </section>
    );
}

export default SingleBanner;
