import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import FAQSection from 'components/FAQSection/FAQSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function FAQ(props: any): any {
    return (
        <>
            <Breadcrumbs />
            <PageTitle
                title='Shop Terms & Conditions'
            />
            <FAQSection />
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default FAQ;