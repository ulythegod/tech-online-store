import React from 'react';
import styles from './storeButton.module.scss';

interface ComponentProps{
    style: string;
    content: any;
}

class StoreButton extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <button className={`${styles[this.props.style]}`}>{this.props.content}</button>
        );
    }
}

export default StoreButton;