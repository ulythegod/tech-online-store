import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import DashboardBlock from 'components/DashboardBlock/DashboardBlock';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function Dashboard(props: any): any {
    return (
        <>
            <section className="dashboard-section">
                <Breadcrumbs />
                <PageTitle
                    title='My Dashboard'
                />
                <DashboardBlock />
            </section>
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default Dashboard;