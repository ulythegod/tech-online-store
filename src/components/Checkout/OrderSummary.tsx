import React from 'react';
import SummaryItem from 'components/Checkout/SummaryItem';
import image1 from '../../images/summary1.png';
import image2 from '../../images/summary2.png';

interface ComponentProps {
    amount: number;
}

class OrderSummary extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="order-summary">
                <span>Order Summary</span>
                <a href="#">{this.props.amount} Items in Cart</a>
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
}

export default OrderSummary;