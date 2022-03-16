import React from 'react';
import styles from './productImageBlock.module.scss';
import RoundButton from 'components/CommonComponents/RoundButton';
import { ReactComponent as PaginationButton } from '../../images/pagiantion-button.svg';
import { ReactComponent as ZipLogo } from '../../images/zip-logo.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';

interface ComponentProps {
    image: string;
    name: string;
}

class ProductImageBlock extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["product-image-block"]}`}>
                <div className={`${styles["product-buttons"]}`}>
                    <RoundButton 
                        content={<ProductMail />}
                    />
                    <RoundButton 
                        content={<ProductRating />}
                    />
                    <RoundButton 
                        content={<ProductFav />}
                    />
                </div>
                <div className={`${styles["product-image"]}`}>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <div className={`${styles["zip-info"]}`}>
                    <ZipLogo className={`${styles["zip-logo"]}`} />
                    <span className={`${styles["zip-line"]}`}></span>
                    <span className={`${styles["zip-text"]}`}>
                        own it now, up to 6 months interest free <a href="#">learn more</a>
                    </span>
                </div>
                <div className={`${styles["product-scrolling"]}`} >
                    <PaginationButton className={`${styles["filled"]}`} />
                    <PaginationButton />
                    <PaginationButton />
                </div>
            </div>
        );
    }
}

export default ProductImageBlock;