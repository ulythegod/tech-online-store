import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import AboutUsBlocks from 'components/AboutUsBlocks/AboutUsBlocks';

function AboutUs() {
    return (
        <>
            <Breadcrumbs />
            <PageTitle
                title='About Us'
            />
            <AboutUsBlocks />
            <ReviewsSection />
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default AboutUs;