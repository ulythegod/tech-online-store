import React, { useEffect } from 'react';

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
import prodImgHorizontal from '../../images/catalog2.png';

function Catalog(props: any): any {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    const postStatus = useSelector((state: RootState) => state.products.status); 

    console.log(postStatus);

    useEffect(() => {
        console.log('???');
        if (postStatus === "idle") {
            dispatch(fetchProducts());            
        }        
    }, [postStatus, dispatch]);
    
    console.log(products);
    
    const productsItems = products[0].map((product: any, id: number) => {
        return (
            <ProductItem 
                name={product.name}
                productImage={product.photo[0].url}
                status='in-stock'
                price={product.price}
                discount={product.price}
                model="SKU D5515AI"
                reviewsCount={4}
            />
        )
    });    

    return (
        <section className={`${styles["catalog-section"]}`}>
            <div className={`${styles["catalog-block"]}`}>
                <CatalogFilter />
                <div className={`${styles["catalog"]}`}>
                    <CatalogTopElements />
                    <CatalogSelectedFilters />
                    <div className={`${styles["catalog-table-view"]}`}>
                        {productsItems}
                    </div>
                    <CatalogPagination />
                    <CatalogDescription />
                </div>
            </div>
        </section>
    );
}

export default Catalog;