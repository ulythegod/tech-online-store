import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../../features/products/productsSlice';
import { RootState }  from '../../store';

import styles from './catalog.module.scss';

import CatalogTopElements from './CatalogTopElements';
import CatalogSelectedFilters from './CatalogSelectedFilters';
import CatalogPagination from './CatalogPagination';
import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogDescription from './CatalogDescription';
import CatlogItemHorizontal from 'components/CatalogItem/CatlogItemHorizontal';
import ProductItem from 'components/CatalogItem/ProductItem';
import StoreButton from 'components/Buttons/StoreButton';
import CompareProducts from 'components/CompareProducts/CompareProducts';
import WishList from 'components/WishList/WishList';
import CatalogFilterBanner from 'components/CatalogFilter/CatalogFilterBanner';
import { ReactComponent as TableView } from '../../images/table-view.svg';
import { ReactComponent as LinesView } from '../../images/lines-view.svg';
import banner from '../../images/filters-banner.png';

function Catalog(props: any): any {
    const [view, setView] = useState('table');
    function handleViewChage(event: any) {
        event.preventDefault();

        if (view === "table") {
            setView("column");
        } else if (view === "column") {
            setView("table");
        }        
    }

    const dispatch: any = useDispatch();
    const products: any[] = useSelector(selectAllProducts);

    const postStatus: string = useSelector((state: RootState) => state.products.status);

    useEffect(() => {
        if (postStatus === 'idle') {            
           dispatch(fetchProducts()); 
        }       
                
    }, [postStatus, dispatch]);
    
    let productsItems: any [] = [];

    if (products.length > 0 && products[0].length > 0) {
        productsItems = products[0].map((product: any, id: number) => {
            if (view === "table") {
                return (
                    <ProductItem
                        key={id}
                        name={product.name}
                        productImage={product.photo[0].url}
                        status='in-stock'
                        price={product.price}
                        discount={product.price}
                        model="SKU D5515AI"
                        reviewsCount={4}
                    />
                )
            } else if (view === "column") {
                return (
                    <CatlogItemHorizontal
                        key={id}
                        name={product.name}
                        productImage={product.photo[0].url}
                        status='in-stock'
                        price={product.price}
                        discount={product.price}
                        model="SKU D5515AI"
                        reviewsCount={4}
                        specs={product.specs}
                    />
                )
            }            
        });
    }   

    return (
        <section className={`${styles["catalog-section"]}`}>
            <div className={`${styles["catalog-block"]}`}>
                <CatalogFilter />
                <div className={`${styles["catalog"]}`}>
                    <CatalogTopElements 
                        view={view}
                        tableButton={
                            <StoreButton 
                                style={(view === "table") ? 'icon-button' : 'icon-button-disabled'}
                                content={<TableView />}
                                buttonAction={handleViewChage}
                                showOnMobile={false}
                            />
                        }
                        linesButton={
                            <StoreButton 
                                style={(view === "column") ? 'icon-button' : 'icon-button-disabled'}
                                content={<LinesView />}
                                buttonAction={handleViewChage}
                                showOnMobile={false}
                            />
                        }
                    />
                    <CatalogSelectedFilters />
                    <div className={
                        (view === "table") ? `${styles["catalog-table-view"]}` : 
                        (view === "column") ? `${styles["catalog-column-view"]}` : ``
                    }>
                        {productsItems}
                    </div>
                    <CatalogPagination />
                    <div className={`${styles["filters-rest"]}`}>
                        <CompareProducts />
                        <WishList />
                        <CatalogFilterBanner 
                            image={banner}
                            link='#'
                        />
                    </div>
                    <CatalogDescription />
                </div>
            </div>
        </section>
    );
}

export default Catalog;