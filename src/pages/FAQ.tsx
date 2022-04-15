import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import FAQSection from 'components/FAQSection/FAQSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function FAQ() {
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