import React from 'react';
import styles from './storeButton.module.scss';
import classNames from 'classnames';
import { StoreButtonProps } from '../../CustomPropsTypes';

function StoreButton(props: StoreButtonProps) {
    return (
        <button 
            className={
                (props.showOnMobile === false) ? 
                    classNames(styles[props.buttonStyle], styles["hidden"]) : 
                    styles[props.buttonStyle]
            }
            onClick={(event: any) => props.buttonAction?.(event)}
            aria-label={props.label}
        >
                {props.content}
        </button>
    );
}

export default StoreButton;