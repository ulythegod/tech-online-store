import React from 'react';
import styles from './catalogFilterBanner.module.scss';

interface CustomComponentProps {
    image: string;
    link: string;
}

class CatalogFilterBanner extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <a className={`${styles["banner"]}`} href={this.props.link}>
                <img src={this.props.image} alt="the icon series"/>
            </a>
        );
    }
}

export default CatalogFilterBanner;