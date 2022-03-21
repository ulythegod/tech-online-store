import React from 'react';
import { ReactComponent as DeleteItem } from '../../images/card-delete-item.svg';
import { ReactComponent as EditItem } from '../../images/card-edit-item.svg';

function CardItem(props: any): any {
    return (
        <tr>
            <td>
                <img src={props.image} alt=""/>
            </td>
            <td>
                <p>
                    {props.description}
                </p>
            </td>
            <td>
                <span>${props.price}</span>
            </td>
            <td>
                <input type="number" value={props.quantity}/>
            </td>
            <td>
                <span>${props.subtotal}</span>
                <div>
                    <button><DeleteItem /></button>
                    <button><EditItem /></button>                                    
                </div>
            </td>
        </tr>
    );
}

export default CardItem;