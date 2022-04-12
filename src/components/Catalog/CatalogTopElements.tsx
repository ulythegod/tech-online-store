import React, { ReactElement } from 'react';
import styles from './catalogTopElements.module.scss';
import CatalogSelect from './CatalogSelect';

type Props = {
    tableButton: ReactElement<any, any>,
    linesButton: ReactElement<any, any>,
}

function CatalogTopElements(props: Props) {
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
                showOnMobile={false}
            />
            <CatalogSelect 
                options={perPage}
                selectLabel="Show"
                showOnMobile={false}
            />
            {props.tableButton}
            {props.linesButton}
        </div>
    );
}

export default CatalogTopElements;
