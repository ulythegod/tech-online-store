import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import SingleBanner from 'components/Banners/SingleBanner';
import PageTitle from 'components/CommonComponents/PageTitle';
import Catalog from 'components/Catalog/Catalog';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';
import banner from '../images/catalog-banner.png';

function CatalogPage(props: any): any {
    return (
        <>
            <SingleBanner
                image={banner}
            />
            <Breadcrumbs />
            <PageTitle
                title='MSI PS Series (20)'
            />
            <Catalog />
            <AdvantagesSection 
              isBackground={true}
            />
        </>
    );
}

export default CatalogPage;
