import React from 'react';
import styles from './productItem.module.scss';
import { Link } from 'react-router-dom';
import RatingButton from './RatingButton';
import StoreButton from '../Buttons/StoreButton';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { productAdded } from '../../features/product-card/productCardSlice';
import { RootState } from '../../store';
import { selectProductById } from '../../features/products/productsSlice';

import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as AddToFav } from '../../images/prod-add-fav.svg';
import { ReactComponent as AddToRating } from '../../images/prod-add-rating.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';
import { ProductItemProps } from 'CustomPropsTypes';

function ProductItem(props: ProductItemProps) {
    const dispatch = useDispatch();
    const incomingProduct = useSelector((store: RootState) => selectProductById(store, props.id));
        
    let product: ProductItemProps = {
        ...props
    };

    if (props.isUseFetch) {
        if (incomingProduct.id > 0) {
            product = {
                ...props,
                discount: Number(incomingProduct.price),
                price: Number(incomingProduct.price),
                name: incomingProduct.name,
                productImage: incomingProduct.photo[0].url
            }
        }                
    }

    let statusText: string = '';
        
    if (product.status === "in-stock") {
        statusText = "in-stock";
    } else if (product.status === "check-availability") {
        statusText = "check-availability";
    }

    function handleAddToCard(event: any) {
        dispatch(productAdded(product.id))
    }

    return (
        <div 
            className={
                !product.isNewProducts ?
                styles["product-preview"] :
                styles["new-product-preview"]
            }
            aria-label="product-preview"
            role="product"
        >
            <div className={styles["item-inner"]}>
                <p className={classNames(styles["product-status"], styles[product.status])} aria-label="product-status">
                    {
                        (product.status === "in-stock") ? <InStock /> : 
                        (product.status === "check-availability") ? <CheckAvailability /> : 
                        ""
                    }
                    <span className={styles["status-text"]}>{statusText}</span>
                </p>
                <div className={styles["product-buttons"]}>
                    <StoreButton
                        buttonStyle="icon-button"
                        content={<AddToFav />}
                    />
                    <StoreButton
                        buttonStyle="icon-button"
                        content={<AddToRating />}
                    />
                </div>
                <Link className={styles["product-image-link"]} to={`/product/${product.id}`}>
                    <img className={styles["product-image"]} src={product.productImage} alt="Product" />
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
                    <a className={styles["reviews-link"]} href='#'>Reviews ({product.reviewsCount})</a>
                </div>
                <Link to={`/product/${product.id}`} className={styles["product-title"]}>{product.name}</Link>
                <span className={styles["product-price"]} role="price">${product.price}</span>
                <span className={styles["product-discount"]} role="discount">${product.discount}</span>
                <div className={styles["add-to-card-btn"]}>
                    <StoreButton 
                        buttonStyle="light-button-narrow"
                        content={
                            <>
                                <AddToCart />
                                <span>Add To Cart</span>
                            </>
                        }
                        buttonAction={handleAddToCard}
                        label={"Add To Cart"}
                    />
                </div>
            </div>
        </div>
    );
}
export default ProductItem;
