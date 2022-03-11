import React from 'react';
import styles from './catalogTopElements.module.scss';
import StoreButton from 'components/CommonComponents/StoreButton';
import CatalogSelect from './CatalogSelect';
import { ReactComponent as TableView } from '../../images/table-view.svg';
import { ReactComponent as LinesView } from '../../images/lines-view.svg';

class CatalogTopElements extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render(): React.ReactNode {
        const positions: any[] = [
            { value: 'position', label: 'Position' },
            { value: 'position2', label: 'Position2' },
            { value: 'position3', label: 'Position3' }
        ];

        const perPage: any[] = [
            {value: '35', label: '35 per page'},
            {value: '50', label: '50 per page'},
            {value: '100', label: '100 per page'}
        ];

        return (
            <div className={`${styles["catalog-top-elements"]}`}>
                <span>Items 1-35 of 61</span>
                <CatalogSelect 
                    options={positions}
                    selectLabel="Sort by"
                />
                <CatalogSelect 
                    options={perPage}
                    selectLabel="Show"
                />
                <StoreButton 
                    style='icon-button'
                    content={<TableView />}
                />
                <StoreButton 
                    style='icon-button'
                    content={<LinesView />}
                />
            </div>
        );
    }
}

export default CatalogTopElements;
