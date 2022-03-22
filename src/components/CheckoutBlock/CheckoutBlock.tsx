import React from 'react';
import styles from './checkoutBlock.module.scss';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

function CheckoutBlock(props: any): any {
    return (
        <div className={`${styles["checkout-block"]}`}>
            <CheckoutForm />
            <OrderSummary 
                amount={2}
            />
        </div>
    )
}

export default CheckoutBlock;