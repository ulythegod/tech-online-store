import React from 'react';
import styles from './addToCart.module.scss';
import AddToCartMenu from './AddToCartMenu';
import AddToCartPrices from './AddToCartPrices';

function AddToCart(props: any): any {
    return (
        <section className={`${styles["add-to-card-section"]}`}>
            <div className={`${styles["add-to-card-block"]}`}>
                {props.renderLeft}
                {props.renderRight}
            </div>
        </section>
    );
}

export default AddToCart;