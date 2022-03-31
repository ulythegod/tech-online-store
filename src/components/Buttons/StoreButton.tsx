import React from 'react';
import styles from './storeButton.module.scss';

function StoreButton(props: any): any {
    return (
        <button 
            className={`${styles[props.style]}`}
            onClick={(event: any) => props.buttonAction(event)}
        >
                {props.content}
        </button>
    );
}

export default StoreButton;