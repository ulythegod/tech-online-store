import React from 'react';
import styles from './catalogItemHorizontal.module.scss';
import RatingButton from './RatingButton';
import StoreButton from '../../components/Buttons/StoreButton';
import RoundButton from '../../components/Buttons/RoundButton';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';
import { CatlogItemHorizontalProps } from 'CustomPropsTypes';

import { useDispatch, useSelector } from 'react-redux';
import { productAdded } from '../../features/product-card/productCardSlice';
import { RootState } from '../../store';
import { selectProductById } from '../../features/products/productsSlice';

function CatlogItemHorizontal(props: CatlogItemHorizontalProps) {
    const dispatch = useDispatch();
    const incomingProduct = useSelector((store: RootState) => selectProductById(store, props.id));
    
    let product: CatlogItemHorizontalProps = {
        ...props
    };

    if (props.isUseFetch) {
        if (incomingProduct.id > 0) {
            product = {
                ...props,
                discount: Number(incomingProduct.price),
                price: Number(incomingProduct.price),
                name: incomingProduct.name,
                productImage: incomingProduct.photo[0].url,
                specs: incomingProduct.specs,
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
        <div className={styles["product-preview"]}>
            <p className={classNames(styles["product-status"], styles[product.status])}>
                {
                    (product.status === "in-stock") ? <InStock /> : 
                    (product.status === "check-availability") ? <CheckAvailability /> : 
                    ""
                }
                <span className={styles["status-text"]}>{statusText}</span>
            </p>
            <div className={styles["product-info"]}>
                <Link className={styles["product-image"]} to={`/product/${product.id}`}><img src={product.productImage} alt="Product" /></Link>
                <div className={styles["about-product"]}>
                    <span className={styles["product-model"]}>{product.model}</span>
                    <a className={styles["product-title"]}>
                        {product.name}
                    </a>
                    <div className={styles["product-prices"]}>
                        <span className={styles["product-price"]}>${product.price}</span>
                        <span className={styles["product-discount"]}>${product.discount}</span>
                    </div>
                </div>
                <div className={styles["features"]}>
                    <table>
                        <tbody>
                            {
                                product.specs.map((specsItem: any, id: number) => {
                                    return (
                                        <tr
                                            className={(id % 2 === 0) ? styles["dark"] : ``}
                                            key={id}
                                        >
                                            <td>{specsItem.spec}</td>
                                            <td>{specsItem.value}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={styles["product-bottom"]}>
                <div className={styles["product-rating"]}>
                        <div>
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
                    <a>Reviews ({product.reviewsCount})</a>
                </div>
                <div className={styles["product-button"]}>
                    <StoreButton 
                        buttonStyle='light-button'
                        content={
                            <>
                                <AddToCart />
                                Add To Cart
                            </>
                        }
                        buttonAction={handleAddToCard}
                    />  
                </div>                    
                <div className={styles["product-buttons"]}>
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
            </div>                        
        </div>
    );
}

export default CatlogItemHorizontal;