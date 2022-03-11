import React from 'react';
import styles from './catalogPagination.module.scss';

class CatalogPagination extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["catalog-pagination"]}`}>
                <a href="#">
                    <div className={`${styles["prev"]}`}></div>    
                </a>
                <a href="#">1</a>
                <a className={`${styles["active"]}`} href="#">2</a>
                <a href="#">3</a>
                ...
                <a href="#">15</a>
                <a href="#">
                    <div className={`${styles["next"]}`}></div>    
                </a>
            </div>
        );
    }
}

export default CatalogPagination;