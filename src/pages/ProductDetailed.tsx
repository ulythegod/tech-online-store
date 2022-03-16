import React from 'react';
import ProductLinks from 'components/Banners/BannerWithLinks';
import ProductFeatures from 'components/FeaturesSection/Features';
import ProductBanners from 'components/Banners/ProductBanners';
import ProductSection from 'components/ProductSection/ProductSection';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import AddToCart from 'components/AddToCartBlock/AddToCart';

class ProductDetailed extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <AddToCart />
                <ProductSection />
                <ProductBanners />
                <ProductLinks />
                <ProductFeatures 
                    sectionName='Featues'
                    sectionDescription={
                        `The MPG series brings out the best in gamers by allowing 
                        full expression in color with advanced RGB lighting 
                        control and synchronization.`
                    }
                />
                <AdvantagesSection 
                  isBackground={true}
                />
            </>
        );
    }
}

export default ProductDetailed;
