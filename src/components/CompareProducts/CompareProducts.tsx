import React from "react";
import styles from './compareProducts.module.scss';

function CompareProducts() {
    return (
        <div className={styles["compare-products"]}>
            <span>Compare Products</span>
            <p>You have no items to compare.</p>
        </div>
    )
}

export default CompareProducts;