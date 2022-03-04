import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import CatalogBanner from 'components/CatalogPage/CatalogBanner';
import PageTitle from 'components/CommonComponents/PageTitle';
import Catalog from 'components/CatalogPage/Catalog';
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
