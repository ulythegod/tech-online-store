import React from 'react';
import styles from './turnOverButton.module.scss';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../images/arrow-right.svg';

type Props = {
    type: string,
    buttonAction?: Function
}

function TurnOverButton(props: Props) {
    return (
        <button 
            className={classNames(styles["button"], styles[props.type])} 
            onClick={(event: any) => props.buttonAction?.(event)}
        >
            <Arrow className={styles["arrow-image"]} />
        </button>
    );
}

export default TurnOverButton;