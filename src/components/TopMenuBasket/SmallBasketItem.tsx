import React from 'react';
import styles from './smallBasketItem.module.scss';
import { ReactComponent as RemoveItem } from '../../images/prod-remove-item.svg';
import { ReactComponent as EditItem } from '../../images/prod-edit-item.svg';

type Props = {
    amount: number,
    imagePath: string,
    name: string,
    id: number,
    handleProductRemoved: Function
}

function SmallBasketItem(props: Props) {
    return (
        <div className={`${styles["basket-list-item"]}`}>
            <span>{props.amount} x</span>
            <img className={`${styles["item-img"]}`} src={props.imagePath} alt=""/>
            <a className={`${styles["item-link"]}`} href='#'>
                {props.name}
            </a>
            <div className={`${styles["item-buttons"]}`}>
                <button onClick={(event: any) => props.handleProductRemoved(event, props.id)}>
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
