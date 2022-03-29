import React from 'react';
import styles from './smallBasketItem.module.scss';
import { ReactComponent as RemoveItem } from '../../images/prod-remove-item.svg';
import { ReactComponent as EditItem } from '../../images/prod-edit-item.svg';

function SmallBasketItem(props: any): any {
    return (
        <div className={`${styles["basket-list-item"]}`}>
            <span>{props.amount} x</span>
            <img src={props.imagePath} alt=""/>
            <a className={`${styles["item-link"]}`} href='#'>
                {props.name}
            </a>
            <div className={`${styles["item-buttons"]}`}>
                <button>
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
