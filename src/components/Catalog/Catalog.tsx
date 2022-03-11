import React from 'react';
import styles from './catalog.module.scss';
import ProductItem from 'components/CatalogItem/ProductItem';
import CatalogTopElements from './CatalogTopElements';
import CatalogSelectedFilters from './CatalogSelectedFilters';
import CatalogPagination from './CatalogPagination';
import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import prodImg from '../../images/new-prod-img1.png';

class Catalog extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className={`${styles["catalog-section"]}`}>
                <div className={`${styles["catalog-block"]}`}>
                    <CatalogFilter />
                    <div className={`${styles["catalog"]}`}>
                        <CatalogTopElements />
                        <CatalogSelectedFilters />
                        <div className={`${styles["catalog-table-view"]}`}>
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                            <ProductItem 
                                status='in-stock'
                                productImage={prodImg}
                                name='EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...'
                                price={499.00}
                                discount={499.00}
                                reviewsCount={4}
                            />
                        </div>
                        <CatalogPagination />
                    </div>
                </div>
            </section>
        );
    }
}

export default Catalog;