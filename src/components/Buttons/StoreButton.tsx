import React from 'react';
import styles from './storeButton.module.scss';

function StoreButton(props: any): any {
    return (
        <button className={`${styles[props.style]}`}>{props.content}</button>
    );
}

export default StoreButton;