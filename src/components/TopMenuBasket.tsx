import React from 'react';
import { ReactComponent as BasketLogo } from '../images/basket.svg';
import SmallBasketItem from './SmallBasketItem';

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
                            image={"../images/small-basket.png"}
                            name={"EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On..."}                            
                        />
                        <div className="basket-list-item">
                            <span>1 x</span>
                            <img src="./images/small-basket.png" alt=""/>
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 
                                15.6 MULTITOUCH All-In-On...
                            </p>
                            <div className="item-buttons">
                                <button>
                                    <img src="./images/prod-add-fav.png" alt=""/>
                                </button>
                                <button>
                                    <img src="./images/prod-add-rating.png" alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="basket-list-item">
                            <span>1 x</span>
                            <img src="./images/small-basket.png" alt=""/>
                            <p>
                                EX DISPLAY : MSI Pro 16 Flex-036AU 
                                15.6 MULTITOUCH All-In-On...
                            </p>
                            <div className="item-buttons">
                                <button>
                                    <img src="./images/prod-add-fav.png" alt=""/>
                                </button>
                                <button>
                                    <img src="./images/prod-add-rating.png" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basket-bottom">
                        <span>Subtotal: <span>$499.00</span></span>
                        <button>Go to Checkout</button>
                        <button>
                            Check out with
                            <img src="./images/paypal-logo.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopMenuBasket;
