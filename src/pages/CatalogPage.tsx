import React from 'react';
import SingleBanner from 'components/Banners/SingleBanner';
import Catalog from 'components/Catalog/Catalog';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import banner from '../images/catalog-banner.png';

function CatalogPage() {
    return (
        <>
            <div>test test test</div>
            <SingleBanner
                image={banner}
            />
            <Catalog />
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default CatalogPage;
