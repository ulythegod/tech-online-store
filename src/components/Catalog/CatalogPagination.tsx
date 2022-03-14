import React from 'react';
import styles from './catalogPagination.module.scss';

class CatalogPagination extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["catalog-pagination"]}`}>
                <a className={`${styles["pagination-element"]}`} href="#">
                    <div className={`${styles["prev"]}`}></div>    
                </a>
                <a className={`${styles["pagination-element"]}`} href="#">1</a>
                <a className={`${styles["active"]}` + " " + `${styles["pagination-element"]}`} href="#">2</a>
                <a className={`${styles["pagination-element"]}`} href="#">3</a>
                <span className={`${styles["pagination-element"]}`}>...</span>
                <a className={`${styles["pagination-element"]}`} href="#">15</a>
                <a className={`${styles["pagination-element"]}`} href="#">
                    <div className={`${styles["next"]}`}></div>    
                </a>
            </div>
        );
    }
}

export default CatalogPagination;