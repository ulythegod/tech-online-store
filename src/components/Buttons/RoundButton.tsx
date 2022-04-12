import React from 'react';
import styles from './roundButton.module.scss';

type Props = {
    content: object
}

function RoundButton(props: Props) {
    return (
        <button className={`${styles["round-button"]}`}>
            {props.content}
        </button>
    );
}

export default RoundButton;