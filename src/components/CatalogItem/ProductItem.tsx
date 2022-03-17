import React from 'react';
import styles from './productItem.module.scss';
import { Link } from 'react-router-dom';
import RatingButton from './RatingButton';
import StoreButton from 'components/CommonComponents/StoreButton';
import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as AddToFav } from '../../images/prod-add-fav.svg';
import { ReactComponent as AddToRating } from '../../images/prod-add-rating.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';

interface CustomInputProps {
    status: string;
    productImage: string;
    name: string;
    price: number;
    discount: number;
    reviewsCount: number;
}

class ProductItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let statusText: string = '';
        
        if (this.props.status == "in-stock") {
            statusText = "in-stock";
        } else if (this.props.status == "check-availability") {
            statusText = "check-availability";
        }

        return (
            <div className={`${styles["product-preview"]}`}>
                <p className={`${styles["product-status"]}` + ' ' + `${styles[this.props.status]}`}>
                    {
                        (this.props.status == "in-stock") ? <InStock /> : 
                        (this.props.status == "check-availability") ? <CheckAvailability /> : 
                        ""
                    }
                    <span className={`${styles["status-text"]}`}>{statusText}</span>
                </p>
                <div className={`${styles["product-buttons"]}`}>
                    <StoreButton
                        style="icon-button"
                        content={<AddToFav />}
                    />
                    <StoreButton
                        style="icon-button"
                        content={<AddToRating />}
                    />
                </div>
                <Link className={`${styles["product-image-link"]}`} to="/product"><img className={`${styles["product-image"]}`} src={this.props.productImage} alt="Product" /></Link>
                <div className={`${styles["product-rating"]}`}>
                    <div className={`${styles["rating-buttons"]}`}>
                        <RatingButton 
                            isFilled={true}
                        />
                        <RatingButton 
                            isFilled={true}
                        />
                        <RatingButton 
                            isFilled={true}
                        />
                        <RatingButton 
                            isFilled={false}
                        />
                        <RatingButton 
                            isFilled={false}
                        />
                    </div>
                    <a href='#'>Reviews ({this.props.reviewsCount})</a>
                </div>
                <Link to="/product" className={`${styles["product-title"]}`}>{this.props.name}</Link>
                <span className={`${styles["product-price"]}`}>${this.props.price}</span>
                <span className={`${styles["product-discount"]}`}>${this.props.discount}</span>
                <div className={`${styles["add-to-card-btn"]}`}>
                    <StoreButton 
                        style="light-button-narrow"
                        content={
                            <>
                                <AddToCart />
                                <span>Add To Cart</span>
                            </>
                        }
                    />
                </div>
            </div>
        );
    }
}

export default ProductItem;
