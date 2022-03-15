import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import DashboardMenu from 'components/Dashboard/DashboardMenu';
import DashboardAccountInfo from 'components/Dashboard/DashboardAccountInfo';
import DashboardAdress from 'components/Dashboard/DashboardAdress';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

class Dashboard extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <section className="dashboard-section">
                    <Breadcrumbs />
                    <PageTitle
                        title='My Dashboard'
                    />
                    <div className="dashboard-block">
                        <div className="dashboard-sidebar">
                            <DashboardMenu />
                            <div className="compare-products">
                                <span>Compare Products</span>
                                <div>
                                    <p>You have no items to compare.</p>
                                </div>
                            </div>
                            <div className="whish-list">
                                <span>My Wish List</span>
                                <div>
                                    <p>You have no items in your wish list.</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-information">
                            <DashboardAccountInfo />
                            <DashboardAdress />
                        </div>
                    </div>
                </section>
                <AdvantagesSection 
                  isBackground={true}
                />
            </>
        );
    }
}

export default Dashboard;