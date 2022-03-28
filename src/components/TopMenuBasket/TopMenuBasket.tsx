import React from 'react';
import styles from './topMenuBasket.module.scss';
import SmallBasketItem from '../TopMenu/SmallBasketItem';
import { ReactComponent as BasketLogo } from '../../images/basket.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import StoreButton from 'components/Buttons/StoreButton';
import imgPath from '../../images/small-card.png';

function TopMenuBasket(props: any): any {
    return (
        <div className={`${styles["basket-top"]}`}>
            <a href="#">
                <BasketLogo className={`${styles["basket-logo"]}`} />
                <span className={`${styles["basket-amount"]}`}>2</span>
            </a>
            <div className={`${styles["appearing-basket-top"]}`}>
                <div className={`${styles["basket-top"]}`}>
                    <span className={`${styles["basket-title"]}`}>My Cart</span>
                    <span className={`${styles["basket-amount-title"]}`}>2 item in cart</span>
                    <StoreButton 
                        style="light-button"
                        content={"View or Edit Your Cart"}
                    />
                </div>
                <div className="basket-list">
                    <SmallBasketItem 
                        amount={1}
                        imagePath={imgPath}
                        name={"EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."} 
                    />
                    <SmallBasketItem 
                        amount={1}
                        imagePath={imgPath}
                        name={"EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."} 
                    />
                </div>
                <div className="basket-bottom">
                    <span>Subtotal: <span>$499.00</span></span>
                    <StoreButton 
                        style="blue-button"
                        content={"Go to Checkout"}
                    />
                    <StoreButton 
                        style="yellow-button-general"
                        content={
                            <>
                                Check out with
                                <PayPal />
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default TopMenuBasket;
