import React from 'react';
import styles from './singleBanner.module.scss';

interface CustomComponentProps {
    image: string;
}

class SingleBanner extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["banner-section"]}`}>
                <a href="/catalog"><img src={this.props.image} alt="Catalog" /></a>
            </section>
        );
    }
}

export default SingleBanner;
