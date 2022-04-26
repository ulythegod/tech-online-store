import React, { ReactElement, useState } from 'react';
import styles from './catalogFilter.module.scss';
import FilterItem from './FilterItem';
import FilterBrands from './FilterBrands';
import CatalogFilterBanner from './CatalogFilterBanner';
import StoreButton from '../Buttons/StoreButton';
import banner from '../../images/filters-banner.png';
import WishList from 'components/WishList/WishList';
import CompareProducts from 'components/CompareProducts/CompareProducts';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectCategoriesProductsAmount } from 'features/categories/categoriesSlice';
import { selectProductsAmountForPrices } from 'features/products/productsSlice';
import { Category, FillersInterface, Price } from '../../CustomTypes';

import { ReactComponent as CloseMenu } from '../../images/close-menu.svg';
import color1 from '../../images/color1.png';
import color2 from '../../images/color2.png';

type Props = {
    currentCategory: Category | undefined,
    subCategories: Category[],
    handleCategorySelect: Function,
    handleClearFilters: Function,
    handleApplyFilters: Function,
    handlePriceSelect: Function,
    handleNameInput: Function,
    appliedFilters: FillersInterface,
    filters: FillersInterface,
    filtersAmount: number,
    prices: Price[],
    sortPosition: ReactElement<any, any>
}

export const useOpenFilter = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const handleFilterOpen = () => {
        setIsOpenFilter(prevIsOpenFilter => !prevIsOpenFilter);
    };

    return {isOpenFilter, handleFilterOpen};
}

function CatalogFilter(props: Props) {
    const {isOpenFilter, handleFilterOpen} = useOpenFilter();

    let backLink: string = "/";
    if (props.currentCategory) {
        if (props.currentCategory.parent) {
            if (props.currentCategory.parent.id) {
                backLink = `/catalog/${props.currentCategory.parent.id}`;
            }
        }                
    }

    let subCategoriesIds: number[] = [];
    if (props.subCategories.length > 0) {
        props.subCategories.forEach((subCategory: any, id: number) => {
            subCategoriesIds.push(subCategory.id)            
        });
    }

    let categoriesForFilter: any[] = useSelector((state: RootState) => selectCategoriesProductsAmount(state, subCategoriesIds));
    
    let categoriesFilter: any[] = [];  

    if (props.subCategories.length > 0 && categoriesForFilter.length > 0) {
        categoriesFilter = props.subCategories.map((category: any, id: number) => {
            return (                
                <li key={category.id}>
                    <Link 
                        to={`/catalog/${category.id}`}
                        onClick={(event: any) => props.handleCategorySelect(event, category.id)}
                        className={
                            props.appliedFilters.categoriesIds.includes(category.id) ? styles["active"] : ``
                        }                   
                    >
                        {category.name}
                    </Link>
                    <span>{categoriesForFilter[category.id].productsAmount}</span>
                </li>            
            )
        })
    }

    let categoriasIds = [...subCategoriesIds];
    if (props.currentCategory) {
        if (props.currentCategory.parent) {
            if (props.currentCategory.parent.id) {
                categoriasIds.push(props.currentCategory.parent.id);
            }
        }                
    }

    let productsAmountsForPrices: any[] = useSelector((state: RootState) => selectProductsAmountForPrices(state, categoriasIds));    
    
    let pricesForFilter: any[] = props.prices.map((price: Price, id: number) => {
        let amount = productsAmountsForPrices[price.id] ? productsAmountsForPrices[price.id] : 0;
        return (
            <li key={id}>
                <a 
                    href="#"
                    onClick={(event: any) => props.handlePriceSelect(event, price)}
                    className={
                        props.appliedFilters.prices.includes(price) ? styles["active"] : ``
                    } 
                >
                    {price.name}
                </a>
                <span>{amount}</span>
            </li>
        )
    });   

    let nameFilter: ReactElement<any, any> = (
        <>
            <input 
                type={"text"} 
                onChange={(event: any) => props.handleNameInput(event)}
                value={props.filters.name}
            />
        </>
    )
    
    return (
        <>
            <div className={styles["filter-buttons-mobile"]}>
                <div className={styles["filter-btn-mobile"]}>
                    <button
                        onClick={handleFilterOpen}
                    >
                        Filter
                    </button>
                </div>
                {props.sortPosition}
            </div>
            <div className={isOpenFilter ? styles["catalog-filter-block-mobile"] : styles["catalog-filter-block"]}>
                <Link className={styles["filter-title-link"]} to={backLink}>Back</Link>
                <div className={styles["filters"]}>
                    <span className={styles["desktop-title"]}>Filters</span>
                    <div className={styles["mobile-title"]}>
                        Filter by
                        <a onClick={handleFilterOpen} href="#"><CloseMenu /></a>
                    </div>
                    <StoreButton
                        buttonStyle='grey-button'
                        content={"Clear Filter"}
                        showOnMobile={false}
                        buttonAction={props.handleClearFilters}
                    />
                    <ul className={styles["filter-items"]}>
                        {
                            (categoriesFilter.length > 0) &&
                            <FilterItem 
                                name='Category'
                                items={
                                    <ul>
                                        {categoriesFilter}
                                    </ul>
                                }
                            />
                        }                        
                        <FilterItem 
                            name='Price'
                            items={
                                <ul>
                                    {pricesForFilter}
                                </ul>
                            }
                        />
                        <FilterItem 
                            name='Color'
                            items={
                                <ul>
                                    <li>
                                        <a href="#"><img src={color1} alt="Black" /></a>
                                    </li>
                                    <li>
                                        <span><img src={color2} alt="Red" /></span>
                                    </li>
                                </ul>
                            }
                            isIcons={true}
                        />
                        <FilterItem 
                            name='Filter Name'
                            items={nameFilter}
                        />
                        <FilterItem 
                            name='Brands'
                            items={
                                <ul>
                                    <li>
                                        <a href="#">CUSTOM PCS</a>
                                        <span>15</span>
                                    </li>
                                    <li>
                                        <a href="#">MSI ALL-IN-ONE PCS</a>
                                        <span>45</span>
                                    </li>
                                    <li>
                                        <a href="#">HP/COMPAQ PCS</a>
                                        <span>1</span>
                                    </li>
                                </ul>
                            }
                        />
                    </ul>
                    <StoreButton
                        buttonStyle='blue-button'
                        content={`Apply Filters (${props.filtersAmount})`}
                        buttonAction={props.handleApplyFilters}
                    />
                </div>
                <FilterBrands />
                <div className={styles["filters-rest"]}>
                    <CompareProducts />
                    <WishList />
                    <CatalogFilterBanner 
                        image={banner}
                        link='#'
                    />
                </div>
            </div>
        </>
    );
}

export default CatalogFilter;