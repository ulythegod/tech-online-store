import React from 'react';
import styles from './roundButton.module.scss';

type Props = {
    content: object,
    buttonAction?: Function,
    itemId?: number
}

function RoundButton(props: Props) {
    return (
        <button className={`${styles["round-button"]}`} onClick={(event: any) => props.buttonAction?.(event, props.itemId)}>
            {props.content}
        </button>
    );
}

export default RoundButton;