import React from 'react';
import styles from './turnOverButton.module.scss';
import { ReactComponent as Arrow } from '../../images/arrow-right.svg';

interface ComponentProps {
    type: string;
}

class TurnOverButton extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <button className={`${styles["button"]}` + ' ' + `${styles[this.props.type]}`}>
                <Arrow className={`${styles["arrow-image"]}`} />
            </button>
        );
    }
}

export default TurnOverButton;