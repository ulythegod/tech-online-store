import React from 'react';
import styles from './summaryItem.module.scss';

function SummaryItem(props: any): any {
    return (
        <div className={`${styles["summary-item"]}`}>
            <a href="#"><img src={props.image} alt=""/></a>
            <div className={`${styles["item-info"]}`}>
                <span className={`${styles["info-text"]}`}>{props.name}</span>
                <span className={`${styles["info-price"]}`}>Qty <span>{props.amount}</span> <span>${props.price}</span></span>
            </div>
        </div>
    );
}

export default SummaryItem;