import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryById, selectCategoriesIds} from 'features/categories/categoriesSlice';
import { selectProductsByCategoryId } from '../../features/products/productsSlice';
import { RootState }  from '../../store';
import { filteredProductsSelector } from '../../features/products/productsSlice';
import { selectAllPrices, selectAllPricesId } from 'features/prices/pricesSlice';

import { FillersInterface, Product, Price } from '../../CustomTypes';

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

function Catalog() {
    const { categoryId } = useParams();
    const category = useSelector((state: RootState) => selectCategoryById(state, Number(categoryId)));
    const categoriesIds = useSelector((state: RootState) => selectCategoriesIds(state, Number(categoryId)));
    const prices = useSelector((state: RootState) => selectAllPrices(state));
    const [filtersAmount, setFiltersAmount] = useState(0);  

    const [filters, setFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: [Number(categoryId)],
        prices: [],
        defaultPrices: prices,
        name: ""
    });

    const [appliedFilters, setAppliedFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: [Number(categoryId)],
        prices: [],
        defaultPrices: prices,
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

    function handlePriceSelect(event: any, priceInput: Price) {
        event.preventDefault(); 

        setFilters({
            ...filters,
            prices: (
                filters.prices.includes(priceInput) ?
                    filters.prices.filter((price) => price !== priceInput) :
                    [...filters.prices, priceInput]
            )
        })
    }

    function handleNameInput(event: any) {
        event.preventDefault();       

        setFilters({
            ...filters,
            name: event.target.value
        })
    }

    function handleApplyFilters(event: any) {
        event.preventDefault();

        let filtersAmount: number = 0;
        if (filters.categoriesIds) {
            filtersAmount += filters.categoriesIds.length;
        }

        if (filters.prices) {
            filtersAmount += filters.prices.length;
        }

        if (filters.name) {
            filtersAmount += 1;
        }

        setAppliedFilters(filters);
        setFiltersAmount(filtersAmount);
    }

    function handleClearFilters(event: any) {
        event.preventDefault();

        setFilters({
            ...filters,
            categoriesIds: [],
            prices: [],
            name: ""
        });

        setAppliedFilters({
            ...appliedFilters,
            categoriesIds: [],
            prices: [],
            name: ""
        });

        setFiltersAmount(0);
    }

    function handleClearFilter(event: any, filterType: string, itemDelete: Price) {
        event.preventDefault();

        if (filterType === "price") {
            setFilters({
                ...filters,
                prices: (
                    filters.prices.includes(itemDelete) ?
                        filters.prices.filter((price) => price !== itemDelete) :
                        [...filters.prices]
                )
            })

            setAppliedFilters({
                ...appliedFilters,
                prices: (
                    appliedFilters.prices.includes(itemDelete) ?
                        appliedFilters.prices.filter((price) => price !== itemDelete) :
                        [...appliedFilters.prices]
                )
            })
        }
        
        if (filterType === "name") {
            setFilters({
                ...filters,
                name: ""
            });
    
            setAppliedFilters({
                ...appliedFilters,
                name: ""
            });
        }
    }

    const [view, setView] = useState('table');
    function handleViewChage(event: any) {
        event.preventDefault();

        if (view === "table") {
            setView("column");
        } else if (view === "column") {
            setView("table");
        }        
    }    
    
    const products = useSelector((state: RootState) => filteredProductsSelector(state, appliedFilters));

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

    let activePricesFilteres: ReactElement<any, any>[] = [];    
    if (appliedFilters.prices) {
        appliedFilters.prices.forEach((price: Price) => {
            let element: ReactElement<any, any> = (
                <SelectedFilter
                    key={price.id}
                    name={price.name}
                    amount={products.length}
                    link='#'
                    filterType='price'
                    deleted={price}
                    handleClearFilter={handleClearFilter}
                />
            )

            activePricesFilteres.push(element);
        });
    }

    let activeNameFilter: ReactElement<any, any> = <></>; 
    if (appliedFilters.name) {
        activeNameFilter = (
            <SelectedFilter
                    key={"delete_name"}
                    name={appliedFilters.name}
                    amount={products.length}
                    link='#'
                    filterType='name'
                    deleted={"name"}
                    handleClearFilter={handleClearFilter}
            />
        )
    }

    let activeCategoryFilters: ReactElement<any, any>[] = [];
    if (appliedFilters.categoriesIds) {
        appliedFilters.categoriesIds.forEach((id: number) => {
            let element: ReactElement<any, any> = (
                <SelectedFilter
                    key={id}
                    amount={products.length}
                    link='#'
                    filterType='category'
                    deleted={id}
                    handleClearFilter={handleClearFilter}
                />
            )

            activePricesFilteres.push(element);
        });
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
                    prices={prices}
                    handleCategorySelect={handleCategorySelect}
                    handlePriceSelect={handlePriceSelect}
                    handleApplyFilters={handleApplyFilters}
                    handleClearFilters={handleClearFilters}
                    handleNameInput={handleNameInput}
                    appliedFilters={appliedFilters}
                    filtersAmount={filtersAmount}
                    filters={filters}
                />
                <div className={`${styles["catalog"]}`}>
                    <CatalogTopElements 
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
                            <>
                                {activePricesFilteres}
                                {activeNameFilter}
                            </>
                        }
                        handleClearFilters={handleClearFilters}
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