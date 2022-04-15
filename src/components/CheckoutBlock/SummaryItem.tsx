import React from 'react';
import styles from './summaryItem.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    image: string,
    name: string,
    amount: number,
    price: number,
    id: number
}

function SummaryItem(props: Props) {
    return (
        <div className={styles["summary-item"]}>
            <Link to={`/product/${props.id}`}><img src={props.image} alt=""/></Link>
            <div className={styles["item-info"]}>
                <span className={styles["info-text"]}>{props.name}</span>
                <span className={styles["info-price"]}>Qty <span>{props.amount}</span> <span>${props.price}</span></span>
            </div>
        </div>
    );
}

export default SummaryItem;