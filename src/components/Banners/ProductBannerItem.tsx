import React, { ReactElement } from 'react';
import styles from './productBannerItem.module.scss';

type Props = {
    image: string,
    name: string,
    description: ReactElement<any, any>
}

function ProductBannerItem(props: Props) {
    const imageStyles = {
        background: `url(${props.image})`,
    }

    return (
        <div className={styles["product-advantages-banner"]}>
            <div className={styles["banner-description"]}>
                <span>{props.name}</span>
                <div>
                    {props.description}
                </div>
            </div>
            <div className={styles["banner-image"]} style={imageStyles}></div>
        </div>
    );
}

export default ProductBannerItem;
