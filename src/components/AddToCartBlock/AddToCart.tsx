import React from 'react';
import styles from './addToCart.module.scss';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import AddToCartMenu from './AddToCartMenu';
import StoreButton from 'components/CommonComponents/StoreButton';

class AddToCart extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["add-to-card-section"]}`}>
                <AddToCartMenu />
                <div className={`${styles["prices-block"]}`}>
                    <span className={`${styles["on-sale"]}`}>On Sale from <span>$3,299.00</span></span>
                    <div className={`${styles["number"]}`}>
                        <button className={`${styles["add-number"]}`}></button>
                        <input type="number" defaultValue={1} />
                        <button className={`${styles["decrease-number"]}`}></button>
                    </div>                    
                    <StoreButton 
                        style='blue-button'
                        content={"Add to Cart"}
                    />
                    <StoreButton 
                        style='yellow-button'
                        content={<PayPal />}
                    />
                </div>
            </section>
        );
    }
}

export default AddToCart;