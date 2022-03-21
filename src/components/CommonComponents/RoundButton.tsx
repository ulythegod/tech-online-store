import React from 'react';
import styles from './roundButton.module.scss';

function RoundButton(props: any): any {
    return (
        <button className={`${styles["round-button"]}`}>
            {props.content}
        </button>
    );
}

export default RoundButton;