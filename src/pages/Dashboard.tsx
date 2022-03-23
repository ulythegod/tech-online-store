import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
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