import React from "react";
import styles from './catalogProductsList.module.scss';
import { CatalogProductsListProps } from 'CustomPropsTypes';

function CatalogProductsList(props: CatalogProductsListProps) {
    return (
        <div className={
            (props.view === "table") ? styles["catalog-table-view"] : 
            (props.view === "column") ? styles["catalog-column-view"] : ``
        }>
            {props.productsItems}
        </div>
    )
};

export default CatalogProductsList;