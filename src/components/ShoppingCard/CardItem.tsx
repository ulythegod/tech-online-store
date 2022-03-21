import React from 'react';
import styles from './cardItem.module.scss';
import { Link } from 'react-router-dom';
import RoundButton from 'components/CommonComponents/RoundButton';
import { ReactComponent as DeleteItem } from '../../images/card-delete-item.svg';
import { ReactComponent as EditItem } from '../../images/card-edit-item.svg';

function CardItem(props: any): any {
    return (
        <tr className={`${styles["card-item"]}`}>
            <td className={`${styles["item-info"]}`}>
                <Link className={`${styles["product-image"]}`} to="/product"><img src={props.image} alt="Product" /></Link>
                <p className={`${styles["description"]}`}>
                    {props.description}
                </p>
            </td>
            <td className={`${styles["item-price"]}`}>
                <span>${props.price}</span>
            </td>
            <td>
                <div className={`${styles["number"]}`}>
                    <button className={`${styles["add-number"]}`}></button>
                    <input type="number" defaultValue={props.quantity} />
                    <button className={`${styles["decrease-number"]}`}></button>
                </div> 
            </td>
            <td className={`${styles["item-subtotal"]}`}>
                <span>${props.subtotal}</span>
            </td>
            <td>
                <RoundButton 
                    content={<DeleteItem />}
                />
                <RoundButton 
                    content={<EditItem />}
                />
            </td>
        </tr>
    );
}

export default CardItem;