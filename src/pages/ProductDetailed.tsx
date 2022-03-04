import React from 'react';
import ProductLinks from 'components/ProductPage/ProductLinks';
import ProductFeatures from 'components/ProductPage/ProductFeatures';
import ProductBanners from 'components/ProductPage/ProductBanners';
import ProductSection from 'components/ProductPage/ProductSection/ProductSection';
import AddToCart from 'components/ProductPage/AddToCart';

class ProductDetailed extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <AddToCart/>
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
            </>
        );
    }
}

export default ProductDetailed;
