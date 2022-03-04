import React from 'react';
import SelectedFilter from './SelectedFilter';

class CatalogSelectedFilters extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="catalog-selected-filters">
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
                <button>
                    Clear All
                </button>
            </div>
        );
    }
}

export default CatalogSelectedFilters;