import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import CardLists from 'components/ShoppingCard/CardLists';
import CardSummaryForm from 'components/ShoppingCard/CardSummaryForm';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

class ShoppingCard extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <section className="shopping-card-section">
                    <Breadcrumbs />
                    <PageTitle
                        title='Shopping Cart'
                    />
                    <div className="shopping-card-block">
                        <CardLists />
                        <div className="card-summary">
                            <CardSummaryForm />
                        </div>
                    </div>
                    <AdvantagesSection 
                      isBackground={true}
                    />
                </section>
            </>
        );
    }
}

export default ShoppingCard;