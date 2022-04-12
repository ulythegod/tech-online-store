import React from 'react';
import styles from './orderSummary.module.scss';
import SummaryItem from 'components/CheckoutBlock/SummaryItem';
import image1 from '../../images/summary1.png';
import image2 from '../../images/summary2.png';

type Props = {
    amount: number
}

function OrderSummary(props: Props) {
    return (
        <div className={`${styles["order-summary"]}`}>
            <span className={`${styles["summary-title"]}`}>Order Summary</span>
            <a className={`${styles["summary-link"]}`} href="#">{props.amount} Items in Cart</a>
            <div className={`${styles["summary-items"]}`}>
                <SummaryItem
                    amount={1}
                    price={3799.00}
                    name="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER..."
                    image={image1}
                />
                <SummaryItem
                    amount={1}
                    price={3799.00}
                    name="MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER..."
                    image={image2}
                />
            </div>
        </div>
    );
}

export default OrderSummary;