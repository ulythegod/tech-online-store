import React from 'react';
import styles from './storeButton.module.scss';
import classNames from 'classnames';

function StoreButton(props: any): any {
    return (
        <button 
            className={
                (props.showOnMobile === false) ? `${classNames(styles[props.style], styles["hidden"])}` : `${styles[props.style]}`
            }
            onClick={(event: any) => props.buttonAction(event)}
        >
                {props.content}
        </button>
    );
}

export default StoreButton;