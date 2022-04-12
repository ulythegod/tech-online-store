import React from 'react';
import styles from './selectedFilter.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectCategoriesProductsAmount } from 'features/categories/categoriesSlice';
import { ReactComponent as DeleteFilter } from '../../images/delete-filter.svg';

type Props = {
    name?: string,
    categoryId?: number,
    link: string,
    filterType: string,
    handleClearFilter: Function
    amount: number,
    deleted: any
}

function SelectedFilter(props: Props) {
    //let categoriesForFilter: any[] = useSelector((state: RootState) => selectCategoriesProductsAmount(state, [props.categoryId]));

    return (
        <button className={`${styles["selected-filter"]}`}>
            <span>{props.name} <span className={`${styles["selected-number"]}`}>({props.amount})</span></span>
            <a href={props.link} onClick={(event: any) => props.handleClearFilter(event, props.filterType, props.deleted)}><DeleteFilter /></a>
        </button>
    );
}

export default SelectedFilter;
