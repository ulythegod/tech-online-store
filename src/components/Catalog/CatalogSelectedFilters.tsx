import React, { ReactElement } from 'react';
import styles from './catalogSelectedFilters.module.scss';

type Props = {
    filtersItems: ReactElement<any, any>[],
    handleClearFilters: Function
}

function CatalogSelectedFilters(props: Props) {
    return (
        <div className={`${styles["catalog-selected-filters"]}`}>
            {props.filtersItems}
            {
                props.filtersItems.length > 0 &&
                <button 
                    className={`${styles["clear-all-btn"]}`}
                    onClick={(event: any) => props.handleClearFilters(event)}
                >
                    Clear All
                </button>
            }            
        </div>
    );
}

export default CatalogSelectedFilters;