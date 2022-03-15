import React from 'react';
import NewProductsSection from 'components/CatalogSections/NewProductsSection'
import BannersSlider from 'components/Banners/BannersSlider';
import LogoBanner from 'components/Banners/logoBanner';
import ProductsSection from 'components/CatalogSections/ProductsSection';
import CompaniesSection from 'components/CompaniesSection/CompaniesSection';
import NewsSection from 'components/NewsSection/NewsSection';
import ReviewsSection from 'components/ReviewsSection/ReviewsSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

class Home extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <BannersSlider />
                <NewProductsSection 
                  name='New Products'
                />
                <LogoBanner />
                <ProductsSection 
                  name='MSI Laptops'
                  sections={false}
                />
                <ProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <ProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <ProductsSection 
                  name='MSI Laptops'
                  sections={true}
                />
                <CompaniesSection />
                <NewsSection />
                <ReviewsSection />
                <AdvantagesSection 
                  isBackground={false}
                />
            </>
        );
    }
}

export default Home;
