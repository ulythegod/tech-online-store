import React from 'react';
import styles from './roundButton.module.scss';

interface ComponentProps {
    content: any;
}

class RoundButton extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <button className={`${styles["round-button"]}`}>
                {this.props.content}
            </button>
        );
    }
}

export default RoundButton;