import React from 'react';
import styles from './catalogSelectedFilters.module.scss';
import SelectedFilter from './SelectedFilter';

function CatalogSelectedFilters(props: any): any {
    return (
        <div className={`${styles["catalog-selected-filters"]}`}>
            {props.filtersItems}
            {
                props.filtersItems &&
                <button className={`${styles["clear-all-btn"]}`}>
                    Clear All
                </button>
            }
            
        </div>
    );
}

export default CatalogSelectedFilters;