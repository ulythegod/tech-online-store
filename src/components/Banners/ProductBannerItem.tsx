import React from 'react';
import styles from './productBannerItem.module.scss';

interface ComponentProps {
    name: string;
    description: any;
    image: string;
}

class ProductBannerItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        const imageStyles = {
            background: `url(${this.props.image})`,
        }

        return (
            <div className={`${styles["product-advantages-banner"]}`}>
                <div className={`${styles["banner-description"]}`}>
                    <span>{this.props.name}</span>
                    <div>
                        {this.props.description}
                    </div>
                </div>
                <div className={`${styles["banner-image"]}`} style={imageStyles}></div>
            </div>
        );
    }
}

export default ProductBannerItem;
