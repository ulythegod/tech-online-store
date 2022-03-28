import React, { useState } from 'react';
import Product from 'components/ProductSection/Product';
import ProductLinks from 'components/Banners/BannerWithLinks';
import ProductFeatures from 'components/FeaturesSection/Features';
import ProductBanners from 'components/Banners/ProductBanners';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

function ProductDetailed(props: any): any {
    return (
        <>
            <Product />
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


export default ProductDetailed;