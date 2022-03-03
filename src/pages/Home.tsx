import React from 'react';
import NewProductsSection from 'components/HomePage/NewProductsSection'
import MainBanners from 'components/HomePage/MainBanners';
import MainBanner from 'components/HomePage/MainBanner';
import MainProductsSection from 'components/HomePage/MainProductsSection';
import MainCompaniesSection from 'components/HomePage/MainCompaniesSection';
import MainNewsSection from 'components/NewsSection/MainNewsSection';
import MainReviews from 'components/ReviewsSection/MainReviews';

class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <MainBanners />
                <NewProductsSection 
                  name='New Products'
                />
                <MainBanner />
                <MainProductsSection 
                  name='MSI Laptops'
                  sections={false}
                />
                <MainProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <MainProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <MainProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <MainCompaniesSection />
                <MainNewsSection />
                <MainReviews />
            </>
        );
    }
}

export default Home;
