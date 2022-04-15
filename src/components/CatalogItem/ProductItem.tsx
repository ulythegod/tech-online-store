import React, { useState } from 'react';
import styles from './productItem.module.scss';
import { Link } from 'react-router-dom';
import RatingButton from './RatingButton';
import StoreButton from 'components/Buttons/StoreButton';
import classNames from 'classnames';

import { useDispatch } from 'react-redux';
import { productAdded } from 'features/product-card/productCardSlice';

import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as AddToFav } from '../../images/prod-add-fav.svg';
import { ReactComponent as AddToRating } from '../../images/prod-add-rating.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';

type Props = {
    status: string,
    id: number,
    productImage: string,
    reviewsCount: number,
    name: string,
    price: number,
    discount: number,
    isNewProducts?: boolean
}

function ProductItem(props: Props) {
    const dispatch = useDispatch();

    let statusText: string = '';
        
    if (props.status == "in-stock") {
        statusText = "in-stock";
    } else if (props.status == "check-availability") {
        statusText = "check-availability";
    }

    function handleAddToCard(event: any) {
        dispatch(productAdded(props.id))
    }

    return (
        <div className={
            !props.isNewProducts ?
            styles["product-preview"] :
            styles["new-product-preview"]
        }>
            <div className={styles["item-inner"]}>
                <p className={classNames(styles["product-status"], styles[props.status])}>
                    {
                        (props.status == "in-stock") ? <InStock /> : 
                        (props.status == "check-availability") ? <CheckAvailability /> : 
                        ""
                    }
                    <span className={styles["status-text"]}>{statusText}</span>
                </p>
                <div className={styles["product-buttons"]}>
                    <StoreButton
                        style="icon-button"
                        content={<AddToFav />}
                    />
                    <StoreButton
                        style="icon-button"
                        content={<AddToRating />}
                    />
                </div>
                <Link className={styles["product-image-link"]} to={`/product/${props.id}`}>
                    <img className={styles["product-image"]} src={props.productImage} alt="Product" />
                </Link>
                <div className={styles["product-rating"]}>
                    <div className={styles["rating-buttons"]}>
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
                    <a className={styles["reviews-link"]} href='#'>Reviews ({props.reviewsCount})</a>
                </div>
                <Link to={`/product/${props.id}`} className={styles["product-title"]}>{props.name}</Link>
                <span className={styles["product-price"]}>${props.price}</span>
                <span className={styles["product-discount"]}>${props.discount}</span>
                <div className={styles["add-to-card-btn"]}>
                    <StoreButton 
                        style="light-button-narrow"
                        content={
                            <>
                                <AddToCart />
                                <span>Add To Cart</span>
                            </>
                        }
                        buttonAction={handleAddToCard}
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductItem;
