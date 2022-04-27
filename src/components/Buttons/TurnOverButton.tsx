import React from 'react';
import styles from './turnOverButton.module.scss';
import classNames from 'classnames';
import { ReactComponent as Arrow } from '../../images/arrow-right.svg';
import { TurnOverButtonProps } from 'CustomTypes';

function TurnOverButton(props: TurnOverButtonProps) {
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