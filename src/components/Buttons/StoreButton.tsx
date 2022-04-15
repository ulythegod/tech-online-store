import React from 'react';
import styles from './storeButton.module.scss';
import classNames from 'classnames';

type Props = {
    style: string,
    content: any,
    showOnMobile?: boolean,
    buttonAction?: Function,
    isDataTest?: boolean
}

function StoreButton(props: Props) {
    return (
        <button 
            className={
                (props.showOnMobile === false) ? classNames(styles[props.style], styles["hidden"]) : styles[props.style]
            }
            onClick={(event: any) => props.buttonAction?.(event)}
            data-testid={
                props.isDataTest ?
                "add-to-basket" :
                ""
            }
        >
                {props.content}
        </button>
    );
}

export default StoreButton;