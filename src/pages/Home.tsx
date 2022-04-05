import React from 'react';
import NewProductsSection from 'components/CatalogSections/NewProductsSection'
import BannersSlider from 'components/Banners/BannersSlider';
import LogoBanner from 'components/Banners/logoBanner';
import PromotedCategories from 'components/PromotedCategories/PromotedCategories';
import CompaniesSection from 'components/CompaniesSection/CompaniesSection';
import NewsSection from 'components/NewsSection/NewsSection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function Home(props: any): any {
    return (
        <>
            <BannersSlider />
            <NewProductsSection 
                name='New Products'
            />
            <LogoBanner />
            <PromotedCategories />
            <CompaniesSection />
            <NewsSection />
            <ReviewsSection />
            <AdvantagesSection 
                isBackground={false}
            />
        </>
    );
}

export default Home;
