import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useSelector } from 'react-redux';
import { selectCategoryById } from '../../features/categories/categoriesSlice';
import { perPageProductsSelector } from '../../features/products/productsSlice';
import { RootState }  from '../../store';
import { selectAllPrices } from '../../features/prices/pricesSlice';

import { 
    FillersInterface,
    Price, 
} from '../../CustomTypes';

import styles from './catalog.module.scss';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PageTitle from '../PageTitle/PageTitle';
import CatalogTopElements from './CatalogTopElements';
import CatalogSelectedFilters from './CatalogSelectedFilters';
import CatalogPagination from './CatalogPagination';
import CatalogFilter from '../CatalogFilter/CatalogFilter';
import CatalogDescription from './CatalogDescription';
import CatlogItemHorizontal from '../CatalogItem/CatlogItemHorizontal';
import ProductItem from '../CatalogItem/ProductItem';
import StoreButton from '../Buttons/StoreButton';
import CompareProducts from '../CompareProducts/CompareProducts';
import WishList from '../WishList/WishList';
import CatalogFilterBanner from '../CatalogFilter/CatalogFilterBanner';
import SelectedFilter from './SelectedFilter';
import CatalogSelect from './CatalogSelect';
import CatalogProductsList from './CatalogProductsList';

import { ReactComponent as TableView } from '../../images/table-view.svg';
import { ReactComponent as LinesView } from '../../images/lines-view.svg';
import banner from '../../images/filters-banner.png';

function Catalog() {
    const { categoryId } = useParams();
    const category = useSelector((state: RootState) => selectCategoryById(state, Number(categoryId)));    
    const prices = useSelector((state: RootState) => selectAllPrices(state));
    const [filtersAmount, setFiltersAmount] = useState(0);  

    const [filters, setFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: [Number(categoryId)],
        prices: [],
        defaultPrices: prices,
        name: "",
        sortField: "",
        currentPage: 1,
        perPageItems: 5
    });

    const [appliedFilters, setAppliedFilters] = useState<FillersInterface>({
        categoriesIds: [],
        defaultCategoriesIds: [Number(categoryId)],
        prices: [],
        defaultPrices: prices,
        name: "",
        sortField: "",
        currentPage: 1,
        perPageItems: 5
    });

    useEffect(() => {
        setFilters({
            ...filters,
            defaultCategoriesIds: [Number(categoryId)],
            name: "",
            sortField: "",
            currentPage: 1,
            perPageItems: 5
        });

        setAppliedFilters({
            ...appliedFilters,
            defaultCategoriesIds: [Number(categoryId)],
            name: "",
            sortField: "",
            currentPage: 1,
            perPageItems: 5
        })
    }, [categoryId])
    
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

    function handleClearFilter(event: any, filterType: string, itemDelete: any) {
        event.preventDefault();

        switch (filterType) {
            case "price":
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
                break;
            case "name":
                setFilters({
                    ...filters,
                    name: ""
                });
            
                setAppliedFilters({
                    ...appliedFilters,
                    name: ""
                });
                break;
            case "category":
                setFilters({
                    ...filters,
                    categoriesIds: (
                        filters.categoriesIds.includes(itemDelete) ? 
                            filters.categoriesIds.filter((id) => id !== itemDelete) : 
                            [...filters.categoriesIds]
                        )
                })

                setAppliedFilters({
                    ...appliedFilters,
                    categoriesIds: (
                        appliedFilters.categoriesIds.includes(itemDelete) ?
                            appliedFilters.categoriesIds.filter((id) => id !== itemDelete) :
                            [...appliedFilters.categoriesIds]
                    )
                })
                break;
        }
    }

    function handleSortSelect(element: any) {
        if (element.value) {
            setFilters({
                ...filters,
                sortField: element.value
            })

            setAppliedFilters({
                ...appliedFilters,
                sortField: element.value
            })
        }        
    }

    function handlePerPageSelect(element: any) {
        if (element.value) {
            setFilters({
                ...filters,
                perPageItems: element.value,
                currentPage: 1
            })

            setAppliedFilters({
                ...appliedFilters,
                perPageItems: element.value,
                currentPage: 1
            })
        } 
    }

    function handlePagination(event: any, pageNumber: number) {
        event.preventDefault();

        if (pageNumber) {
            setFilters({
                ...filters,
                currentPage: pageNumber
            })

            setAppliedFilters({
                ...appliedFilters,
                currentPage: pageNumber
            })
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
    
    const productsResult = useSelector((state: RootState) => perPageProductsSelector(state, appliedFilters));
    
    const products = productsResult.products;

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

    let activeFilteres: ReactElement<any, any>[] = [];    
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

            activeFilteres.push(element);
        });
    }

    if (appliedFilters.name) {
        activeFilteres.push(
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
                    categoryId={id}
                />
            )

            activeFilteres.push(element);
        });
    }

    const positions: any[] = [
        { value: 'name', label: 'Name' },
        { value: 'price', label: 'Price' },
    ];

    const perPage: any[] = [
        {value: '5', label: '5 per page'},
        {value: '10', label: '10 per page'},
        {value: '20', label: '20 per page'},
        {value: '30', label: '30 per page'}
    ];

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
            <section className={styles["catalog-section"]}>
            <div className={styles["catalog-block"]}>
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
                    sortPosition={
                        <CatalogSelect 
                            options={positions}
                            selectLabel="Sort by"
                            handleSortSelect={handleSortSelect}
                        />
                    }
                />
                <div className={styles["catalog"]}>
                    <CatalogTopElements
                        startIndex={productsResult.startIndex}
                        endIndex={productsResult.endIndex}
                        overallAmount={productsResult.overallAmount}
                        sortPosition={
                            <CatalogSelect 
                                options={positions}
                                selectLabel="Sort by"
                                showOnMobile={false}
                                handleSortSelect={handleSortSelect}
                            />
                        }
                        perPage={
                            <CatalogSelect 
                                options={perPage}
                                selectLabel="Show"
                                showOnMobile={false}
                                handlePerPageSelect={handlePerPageSelect}
                            />
                        }
                        tableButton={
                            <StoreButton 
                                buttonStyle={(view === "table") ? 'icon-button' : 'icon-button-disabled'}
                                content={<TableView />}
                                buttonAction={handleViewChage}
                                showOnMobile={false}
                            />
                        }
                        linesButton={
                            <StoreButton 
                                buttonStyle={(view === "column") ? 'icon-button' : 'icon-button-disabled'}
                                content={<LinesView />}
                                buttonAction={handleViewChage}
                                showOnMobile={false}
                            />
                        }
                    />
                    <CatalogSelectedFilters 
                        filtersItems={activeFilteres}
                        handleClearFilters={handleClearFilters}
                    />
                    <CatalogProductsList 
                        view={view}
                        productsItems={productsItems}
                    />
                    <CatalogPagination 
                        startIndex={productsResult.startIndex}
                        endIndex={productsResult.endIndex}
                        perPageAmount={appliedFilters.perPageItems}
                        overallAmount={productsResult.overallAmount}
                        currentPage={appliedFilters.currentPage}
                        handlePagination={handlePagination}
                    />
                    <div className={styles["filters-rest"]}>
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