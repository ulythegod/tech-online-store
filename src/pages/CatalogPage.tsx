import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import SingleBanner from 'components/Banners/SingleBanner';
import PageTitle from 'components/CommonComponents/PageTitle';
import Catalog from 'components/CatalogPage/Catalog';
import banner from '../images/catalog-banner.png';

class CatalogPage extends React.Component {
    render(): React.ReactNode {
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
            </>
        );
    }
}

export default CatalogPage;
