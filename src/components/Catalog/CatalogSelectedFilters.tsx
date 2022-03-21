import React from 'react';
import styles from './catalogSelectedFilters.module.scss';
import SelectedFilter from './SelectedFilter';

function CatalogSelectedFilters(props: any): any {
    return (
        <div className={`${styles["catalog-selected-filters"]}`}>
            <SelectedFilter
                name='CUSTOM PCS'
                amount={24}
                link='#'
            />
            <SelectedFilter
                name='CUSTOM PCS'
                amount={24}
                link='#'
            />
            <button className={`${styles["clear-all-btn"]}`}>
                Clear All
            </button>
        </div>
    );
}

export default CatalogSelectedFilters;