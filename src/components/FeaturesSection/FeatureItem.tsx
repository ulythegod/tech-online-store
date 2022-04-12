import React, { ReactElement } from 'react';
import styles from './featureItem.module.scss';

type Props = {
    image: string,
    description: ReactElement<any, any>
}

function FeatureItem(props: Props) {
    return (
        <div className={`${styles["feature-item"]}`}>
            <div className={`${styles["item-icon"]}`}>
                <img src={props.image} alt="intel" />
            </div>
            <p className={`${styles["item-text"]}`}>
                {props.description}
            </p>
        </div>
    );
}

export default FeatureItem;
