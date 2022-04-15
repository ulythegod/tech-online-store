import React from 'react';
import styles from './addToCart.module.scss';

type Props = {
    renderLeft: object,
    renderRight: object
}

function AddToCart(props: Props) {
    return (
        <section className={styles["add-to-card-section"]}>
            <div className={styles["add-to-card-block"]}>
                {props.renderLeft}
                {props.renderRight}
            </div>
        </section>
    );
}

export default AddToCart;