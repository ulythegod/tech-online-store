import React from 'react';
import { Link } from 'react-router-dom';
import styles from './catalogItemHorizontal.module.scss';
import RatingButton from './RatingButton';
import StoreButton from 'components/CommonComponents/StoreButton';
import RoundButton from 'components/CommonComponents/RoundButton';
import { ReactComponent as InStock } from '../../images/in-stock.svg';
import { ReactComponent as CheckAvailability } from '../../images/check-availability.svg';
import { ReactComponent as ProductMail } from '../../images/product-mail.svg';
import { ReactComponent as ProductRating } from '../../images/product-rating.svg';
import { ReactComponent as ProductFav } from '../../images/product-fav.svg';
import { ReactComponent as AddToCart } from '../../images/add-to-card-prod.svg';

function CatlogItemHorizontal(props: any): any {
    let statusText: string = '';
        
    if (props.status == "in-stock") {
        statusText = "in-stock";
    } else if (props.status == "check-availability") {
        statusText = "check-availability";
    }

    return (
        <div className={`${styles["product-preview"]}`}>
            <p className={`${styles["product-status"]}` + ' ' + `${styles[props.status]}`}>
                {
                    (props.status == "in-stock") ? <InStock /> : 
                    (props.status == "check-availability") ? <CheckAvailability /> : 
                    ""
                }
                <span className={`${styles["status-text"]}`}>{statusText}</span>
            </p>
            <div className={`${styles["product-info"]}`}>
                <Link className={`${styles["product-image"]}`} to="/product"><img src={props.productImage} alt="Product" /></Link>
                <div className={`${styles["about-product"]}`}>
                    <span className={`${styles["product-model"]}`}>{props.model}</span>
                    <a className={`${styles["product-title"]}`}>
                        {props.name}
                    </a>
                    <div className={`${styles["product-prices"]}`}>
                        <span className={`${styles["product-price"]}`}>${props.price}</span>
                        <span className={`${styles["product-discount"]}`}>${props.discount}</span>
                    </div>
                </div>
                <div className={`${styles["features"]}`}>
                    <table>
                        <tbody>
                            <tr>
                                <td>CPU</td>
                                <td>N/A</td>
                            </tr>
                            <tr className={`${styles["dark"]}`}>
                                <td>Featured</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td>I/O Ports</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${styles["product-bottom"]}`}>
                <div className={`${styles["product-rating"]}`}>
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
                <div className={`${styles["product-button"]}`}>
                    <StoreButton 
                        style='light-button'
                        content={
                            <>
                                <AddToCart />
                                Add To Cart
                            </>
                        }
                    />  
                </div>                    
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
            </div>                        
        </div>
    );
}

export default CatlogItemHorizontal;