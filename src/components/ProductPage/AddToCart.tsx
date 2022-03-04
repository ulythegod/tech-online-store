import React from 'react';
import { ReactComponent as PayPal } from '../../images/paypal.svg';
import AddToCartMenu from './AddToCartMenu';

class AddToCart extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="add-to-card-section">
                <AddToCartMenu />
                <div className="prices-block">
                    <span>On Sale from <span>$3,299.00</span></span>
                    <input type="number" />
                    <button>Add to Cart</button>
                    <button><PayPal /></button>
                </div>
            </section>
        );
    }
}

export default AddToCart;