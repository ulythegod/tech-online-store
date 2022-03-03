import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs';
import CatalogBanner from 'components/CatalogBanner';
import PageTitle from 'components/PageTitle';
import Catalog from 'components/Catalog';
import banner from '../images/catalog-banner.png';

class CatalogPage extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <CatalogBanner
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
