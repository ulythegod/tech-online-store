import React from 'react';
import styles from './checkoutBlock.module.scss';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

function CheckoutBlock() {
    return (
        <div className={styles["checkout-block"]}>
            <CheckoutForm />
            <OrderSummary />
        </div>
    )
}

export default CheckoutBlock;