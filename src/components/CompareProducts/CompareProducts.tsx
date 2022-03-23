import React from "react";
import styles from './compareProducts.module.scss';

function CompareProducts(props: any): any {
    return (
        <div className={`${styles["compare-products"]}`}>
            <span>Compare Products</span>
            <p>You have no items to compare.</p>
        </div>
    )
}

export default CompareProducts;