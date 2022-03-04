import React from 'react';
import ProductItem from 'components/CatalogItem/ProductItem';
import CatalogTopElements from './CatalogTopElements';
import CatalogSelectedFilters from './CatalogSelectedFilters';
import CatalogPagination from './CatalogPagination';
import CatalogFilterBanner from './CatalogFilterBanner';
import FilterItem from './FilterItem';
import FilterBrands from './FilterBrands';
import prodImg from '../../images/new-prod-img1.png';
import banner from '../../images/filters-banner.png';

class Catalog extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <section className="catalog-section">
                <div className="catalog-block">
                    <div className="catalog-filter-block">
                        <a href="#">Back</a>
                        <div className="filters">
                            <span>Filters</span>
                            <button>Clear Filter</button>
                            <ul>
                                <FilterItem 
                                    name='Category'
                                />
                                <FilterItem 
                                    name='Price'
                                />
                                <FilterItem 
                                    name='Color'
                                />
                                <FilterItem 
                                    name='Filter Name'
                                />
                            </ul>
                            <button>Apply Filters (2)</button>
                        </div>
                        <FilterBrands />
                        <div className="compare-products">
                            <span>Compare Products</span>
                            <p>You have no items to compare.</p>
                        </div>
                        <div className="wish-list">
                            <span>My Wish List</span>
                            <p>You have no items in your wish list.</p>
                        </div>
                        <CatalogFilterBanner 
                            image={banner}
                            link='#'
                        />
                    </div>
                    <div className="catalog">
                        <CatalogTopElements />
                        <CatalogSelectedFilters />
                        <div className="products products-catalog catalog-table-view">
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