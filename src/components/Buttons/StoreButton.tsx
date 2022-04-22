import React from 'react';
import styles from './storeButton.module.scss';
import classNames from 'classnames';
import { StoreButtonProps } from '../../CustomTypes';

function StoreButton(props: StoreButtonProps) {
    return (
        <button 
            className={
                (props.showOnMobile === false) ? classNames(styles[props.style], styles["hidden"]) : styles[props.style]
            }
            onClick={(event: any) => props.buttonAction?.(event)}
            aria-label={props.label}
        >
                {props.content}
        </button>
    );
}

export default StoreButton;