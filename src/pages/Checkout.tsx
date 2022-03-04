import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import Steps from 'components/Checkout/Steps';
import OrderSummary from 'components/Checkout/OrderSummary';
import CheckoutForm from 'components/Checkout/CheckoutForm';

class Checkout extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="checkout-section">
                <Breadcrumbs />
                <div className="section-header">
                    <PageTitle
                        title='Shopping Cart'
                    />
                    <button>Sign In</button>
                    <Steps />
                </div>
                <div className="checkout-block">
                    <CheckoutForm />
                    <OrderSummary 
                        amount={2}
                    />
                </div>
            </section>
        );
    }
}

export default Checkout;