import React from 'react';
import styles from './selectedFilter.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectCategoriesProductsAmount } from 'features/categories/categoriesSlice';
import { ReactComponent as DeleteFilter } from '../../images/delete-filter.svg';

function SelectedFilter(props: any): any {
    let categoriesForFilter: any[] = useSelector((state: RootState) => selectCategoriesProductsAmount(state, [props.categoryId]));
    let amount: number = categoriesForFilter[props.categoryId].productsAmount;   

    return (
        <button className={`${styles["selected-filter"]}`}>
            <span>{props.name} <span className={`${styles["selected-number"]}`}>({amount})</span></span>
            <a href={props.link} onClick={(event: any) => props.handleClearFilter(event, props.filterType)}><DeleteFilter /></a>
        </button>
    );
}

export default SelectedFilter;
