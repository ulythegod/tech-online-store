import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import Card from 'components/ShoppingCard/Card';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function ShoppingCard(props: any): any {
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