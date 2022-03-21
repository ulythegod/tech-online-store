import React from 'react';
import styles from './featureItem.module.scss';

function FeatureItem(props: any): any {
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
