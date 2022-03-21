import React from 'react';
import styles from './turnOverButton.module.scss';
import { ReactComponent as Arrow } from '../../images/arrow-right.svg';

function TurnOverButton(props: any): any {
    return (
        <button className={`${styles["button"]}` + ' ' + `${styles[props.type]}`}>
            <Arrow className={`${styles["arrow-image"]}`} />
        </button>
    );
}

export default TurnOverButton;