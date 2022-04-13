import React, { ReactElement } from 'react';
import styles from './catalogTopElements.module.scss';

type Props = {
    sortPosition: ReactElement<any, any>,
    perPage: ReactElement<any, any>,
    tableButton: ReactElement<any, any>,
    linesButton: ReactElement<any, any>,
    startIndex: number,
    endIndex: number,
    overallAmount: number
}

function CatalogTopElements(props: Props) {
    return (
        <div className={`${styles["catalog-top-elements"]}`}>
            <span>Items {props.startIndex + 1}-{props.endIndex} of {props.overallAmount}</span>
            {props.sortPosition}
            {props.perPage}
            {props.tableButton}
            {props.linesButton}
        </div>
    );
}

export default CatalogTopElements;
