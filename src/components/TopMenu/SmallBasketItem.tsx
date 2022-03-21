import React from 'react';
import { ReactComponent as RemoveItem } from '../../images/prod-remove-item.svg';
import { ReactComponent as EditItem } from '../../images/prod-edit-item.svg';

function SmallBasketItem(props: any): any {
    return (
        <div className="basket-list-item">
            <span>{props.amount} x</span>
            <img src={props.imagePath} alt=""/>
            <p>
                {props.name}
            </p>
            <div className="item-buttons">
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
