import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryById, selectCategoriesIds} from 'features/categories/categoriesSlice';
import { selectProductsByCategoryId } from '../../features/products/productsSlice';
import { RootState }  from '../../store';
import { Product } from '../../features/products/productsSlice';

import styles from './catalog.module.scss';

import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import PageTitle from 'components/PageTitle/PageTitle';
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
import SelectedFilter from './SelectedFilter';

import { ReactComponent as TableView } from '../../images/table-view.svg';
import { ReactComponent as LinesView } from '../../images/lines-view.svg';
import banner from '../../images/filters-banner.png';

type FillersInterface = {
    categoriesIds: number[],
    defaultCategoriesIds: number[],
    prices: any[],
    name: ""
}

function Catalog() {
    const { categoryId } = useParams();
    const category = useSelector((state: RootState) => selectCategoryById(state, Number(categoryId)));
    const categoriesIds = useSelector((state: RootState) => selectCategoriesIds(state, Number(categoryId)));  

    const [filters, setFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: categoriesIds,
        prices: [],
        name: ""
    });

    const [appliedFilters, setAppliedFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: categoriesIds,
        prices: [],
        name: ""
    });
    
    function handleCategorySelect(event: any, categoryId: number) {
        event.preventDefault();        

        setFilters({
            ...filters,
            categoriesIds: (
                filters.categoriesIds.includes(categoryId) ? 
                    filters.categoriesIds.filter((id) => id !== categoryId) : 
                    [...filters.categoriesIds, categoryId]
                )
        })
    }

    function handleApplyFilters(event: any) {
        event.preventDefault();

        setAppliedFilters(filters);
    }

    function handleClearFilters(event: any) {
        event.preventDefault();
    }

    function handleClearFilter(event: any, filterType: string) {
        event.preventDefault();
    }

    let filtersItems: any = {};  

    const [view, setView] = useState('table');
    function handleViewChage(event: any) {
        event.preventDefault();

        if (view === "table") {
            setView("column");
        } else if (view === "column") {
            setView("table");
        }        
    }
    
    const appliedCategories = appliedFilters.categoriesIds.length > 0 ? appliedFilters.categoriesIds : categoriesIds;
    const products = useSelector((state: RootState) => selectProductsByCategoryId(state, appliedCategories));
    
    let productsItems: any [] = [];

    if (products.length > 0) {
        productsItems = products.map((product: any, id: number) => {
            if (view === "table") {
                return (
                    <ProductItem
                        key={id}
                        id={product.id}
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
                        id={product.id}
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
    
    let subCategories: any[] = [];
    if (category) {
        if (category.subCategories) {
            subCategories = category.subCategories;
        }
    }

    return (        
        <>
            <Breadcrumbs 
                category={category}
            />
            {
                category &&
                <PageTitle
                    title={category.name}
                    isCatalogPage={true}
                />
            }
           
            <section className={`${styles["catalog-section"]}`}>
            <div className={`${styles["catalog-block"]}`}>
                <CatalogFilter 
                    currentCategory={category}
                    subCategories={subCategories}
                    handleCategorySelect={handleCategorySelect}
                    handleApplyFilters={handleApplyFilters}
                    handleClearFilters={handleClearFilters}
                />
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
                    <CatalogSelectedFilters 
                        filtersItems={
                            filtersItems ?
                            <>
                                {filtersItems["category"]}
                            </> :
                            <></>
                        }
                    />
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
        </>
    );
}

export default Catalog;