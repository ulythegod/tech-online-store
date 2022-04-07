import React, { useState } from 'react';
import stylesModule from './topMenuBasket.module.scss';
import SmallBasketItem from './SmallBasketItem';
import StoreButton from 'components/Buttons/StoreButton';
import { usePopper } from 'react-popper';
import { ReactComponent as BasketLogo } from '../../images/basket.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
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

    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [-250, 0],
                    },
                },
            ],
        }
    ); 

    return (
        <>
            <div className={`${stylesModule["basket-top"]}`}
                onMouseEnter={() => handleOnMouseEnter()}
                ref={setReferenceElement}
            >
                <a className={`${stylesModule["basket-icon"]}`} href="#">
                    <BasketLogo className={`${stylesModule["basket-logo"]}`} />
                    <span className={`${stylesModule["basket-amount"]}`}>2</span>
                </a>            
            </div>
            <div 
                ref={setPopperElement}
                onMouseLeave={() => handleOnMouseLeave()}
                className={isOpenBasket ? `${stylesModule["appearing-block"]}` : `${stylesModule["hidden"]}`}
                style={styles.popper} 
                {...attributes.popper}
            >
                <div ref={setArrowRef} className={`${stylesModule["arrow"]}`}></div>
                <div className={`${stylesModule["appearing-basket-top"]}`}>
                    <div className={`${stylesModule["inner-basket-top"]}`}>
                        <span className={`${stylesModule["basket-title"]}`}>My Cart</span>
                        <span className={`${stylesModule["basket-amount-title"]}`}>2 item in cart</span>
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
                    <div className={`${stylesModule["basket-bottom"]}`}>
                        <span className={`${stylesModule["subtotal"]}`}>Subtotal: <span>$499.00</span></span>
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
        </>
    );
}

export default TopMenuBasket;
