import React, { useState } from 'react';
import styles from './topMenuBasket.module.scss';
import SmallBasketItem from './SmallBasketItem';
import { ReactComponent as BasketLogo } from '../../images/basket.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import StoreButton from 'components/Buttons/StoreButton';
import imgPath from '../../images/small-card.png';
import { ReactComponent as BasketMobile } from '../../images/basket-mobile.svg';

function TopMenuBasket(props: any): any {
    const [isOpenBasket, setIsOpenBasket] = useState(false);

    function handleOnMouseEnter() {
        if (!isOpenBasket) {
            setIsOpenBasket(prevIsOpenBasket => !prevIsOpenBasket);
        }
    }

    function handleOnMouseLeave() {
        if (isOpenBasket) {
            setIsOpenBasket(prevIsOpenBasket => !prevIsOpenBasket);
        }
    }

    return (
        <div className={`${styles["basket-top"]}`}
            onMouseEnter={() => handleOnMouseEnter()}
            onMouseLeave={() => handleOnMouseLeave()}
        >
            <div className={`${styles["basket-icon-mobile"]}`}>
                <a href="#">
                    <BasketMobile className={`${styles["basket-logo-mobile"]}`} />
                    <span className={`${styles["basket-amount-mobile"]}`}>2</span>
                </a>                        
            </div>
            <a className={`${styles["basket-icon-desktop"]}`} href="#">
                <BasketLogo className={`${styles["basket-logo"]}`} />
                <span className={`${styles["basket-amount"]}`}>2</span>
            </a>
            <div className={isOpenBasket ? `${styles["appearing-block"]}` : `${styles["hidden"]}`}>
                <div className={`${styles["appearing-basket-top"]}`}>
                    <div className={`${styles["inner-basket-top"]}`}>
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
                    <div className={`${styles["basket-bottom"]}`}>
                        <span className={`${styles["subtotal"]}`}>Subtotal: <span>$499.00</span></span>
                        <StoreButton 
                            style="blue-button"
                            content={"Go to Checkout"}
                        />
                        <StoreButton 
                            style="yellow-button-header"
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
            
        </div>
    );
}

export default TopMenuBasket;
