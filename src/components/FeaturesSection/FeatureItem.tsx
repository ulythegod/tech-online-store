import React from 'react';
import styles from './featureItem.module.scss';

interface ComponentProps {
    image: string;
    description: any;
}

class FeatureItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["feature-item"]}`}>
                <div className={`${styles["item-icon"]}`}>
                    <img src={this.props.image} alt="intel" />
                </div>
                <p className={`${styles["item-text"]}`}>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default FeatureItem;
