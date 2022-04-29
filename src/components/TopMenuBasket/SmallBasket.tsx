import React, { ReactElement } from "react";
import stylesModule from './smallBasket.module.scss';
import StoreButton from '../../components/Buttons/StoreButton';
import { ReactComponent as PayPal } from '../../images/paypal.svg';

type Props = {
    basketItems: ReactElement<any, any>[],
    handleMovingToCard: Function,
    subtotal: number
}

function SmallBasket(props: Props) {
    return (
        <div className={stylesModule["appearing-basket-top"]}>
            <div className={stylesModule["inner-basket-top"]}>
                <span className={stylesModule["basket-title"]}>My Cart</span>
                <span className={stylesModule["basket-amount-title"]}>{props.basketItems.length} item in cart</span>
                <StoreButton 
                    buttonStyle="light-button"
                    content={"View or Edit Your Cart"}
                    buttonAction={props.handleMovingToCard}
                />
            </div>
            <div className="basket-list">
                {props.basketItems}
            </div>
            <div className={stylesModule["basket-bottom"]}>
                <span className={stylesModule["subtotal"]}>Subtotal: <span>${props.subtotal}</span></span>
                <StoreButton 
                    buttonStyle="blue-button"
                    content={"Go to Checkout"}
                />
                <StoreButton 
                    buttonStyle="yellow-button-header"
                    content={
                        <>
                            Check out with
                            <PayPal />
                        </>
                    }
                />
            </div>
        </div>
    )
};

export default SmallBasket;