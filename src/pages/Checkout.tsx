import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import CheckoutHeader from 'components/CheckoutBlock/CheckoutHeader';
import CheckoutBlock from 'components/CheckoutBlock/CheckoutBlock';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function Checkout() {
    return (
        <>
            <section className="checkout-section">
                <Breadcrumbs />
                <CheckoutHeader />
                <CheckoutBlock />
            </section>
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default Checkout;