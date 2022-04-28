import React from 'react';
import styles from './smallBasketItem.module.scss';
import { SmallBasketItemProps } from 'CustomPropsTypes';
import { ReactComponent as RemoveItem } from '../../images/prod-remove-item.svg';
import { ReactComponent as EditItem } from '../../images/prod-edit-item.svg';
import { Link } from 'react-router-dom';

function SmallBasketItem(props: SmallBasketItemProps) {
    return (
        <div className={styles["basket-list-item"]} role="small-basket-item">
            <span><span role="amount-of-item">{props.amount}</span> x</span>
            <img className={styles["item-img"]} src={props.imagePath} alt=""/>
            <Link className={styles["item-link"]} to={`/product/${props.id}`}>
                {props.name}
            </Link>
            <div className={styles["item-buttons"]}>
                <button onClick={(event: any) => props.handleProductRemoved(event, props.id)} aria-label="remove-product">
                    <RemoveItem />
                </button>
                <button>
                    <EditItem />
                </button>
            </div>
        </div>
    );
}

export default SmallBasketItem;
