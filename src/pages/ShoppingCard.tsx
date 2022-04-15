import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import Card from 'components/ShoppingCard/Card';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function ShoppingCard() {
    return (
        <>
            <section className="shopping-card-section">
                <Breadcrumbs />
                <PageTitle
                    title='Shopping Cart'
                />
                <Card />
                <AdvantagesSection 
                  isBackground={true}
                />
            </section>
        </>
    );
}

export default ShoppingCard;