import React from 'react';
import SummaryItem from 'components/CheckoutBlock/SummaryItem';
import image1 from '../../images/summary1.png';
import image2 from '../../images/summary2.png';

function OrderSummary(props: any): any {
    return (
        <div className="order-summary">
            <span>Order Summary</span>
            <a href="#">{props.amount} Items in Cart</a>
            <div className="summary-items">
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