import React from 'react';
import styles from './catalogItemHorizontal.module.scss';
import RatingButton from './RatingButton';
import StoreButton from 'components/Buttons/StoreButton';
import RoundButton from 'components/Buttons/RoundButton';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Spec } from '../../CustomTypes';
import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';

import { useDispatch } from 'react-redux';
import { productAdded } from 'features/product-card/productCardSlice';

type Props = {
    status: string,
    productImage: string,
    model: string,
    name: string,
    price: number,
    discount: number,
    specs: Spec[],
    reviewsCount: number,
    id: number
}

function CatlogItemHorizontal(props: Props) {
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
        <div className={styles["product-preview"]}>
            <p className={classNames(styles["product-status"], styles[props.status])}>
                {
                    (props.status == "in-stock") ? <InStock /> : 
                    (props.status == "check-availability") ? <CheckAvailability /> : 
                    ""
                }
                <span className={styles["status-text"]}>{statusText}</span>
            </p>
            <div className={styles["product-info"]}>
                <Link className={styles["product-image"]} to={`/product/${props.id}`}><img src={props.productImage} alt="Product" /></Link>
                <div className={styles["about-product"]}>
                    <span className={styles["product-model"]}>{props.model}</span>
                    <a className={styles["product-title"]}>
                        {props.name}
                    </a>
                    <div className={styles["product-prices"]}>
                        <span className={styles["product-price"]}>${props.price}</span>
                        <span className={styles["product-discount"]}>${props.discount}</span>
                    </div>
                </div>
                <div className={styles["features"]}>
                    <table>
                        <tbody>
                            {
                                props.specs.map((specsItem: any, id: number) => {
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
                    <a>Reviews ({props.reviewsCount})</a>
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