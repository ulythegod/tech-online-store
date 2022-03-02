import React from 'react';
import SmallBasketItem from './SmallBasketItem';
import { ReactComponent as BasketLogo } from '../../images/basket.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import imgPath from '../../images/small-card.png';

class TopMenuBasket extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="basket-top">
                <a href="#">
                    <BasketLogo />
                </a>
                <span className="basket-amount">2</span>
                <div className="small-basket">
                    <div className="basket-top">
                        <span>My Cart</span>
                        <span>2 item in cart</span>
                        <button>View or Edit Your Cart</button>
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
                        <button>Go to Checkout</button>
                        <button>
                            Check out with
                            <PayPal />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopMenuBasket;
