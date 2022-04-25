import React from 'react';
import styles from './cardItem.module.scss';
import { Link } from 'react-router-dom';
import RoundButton from 'components/Buttons/RoundButton';
import { ReactComponent as DeleteItem } from '../../images/card-delete-item.svg';
import { ReactComponent as EditItem } from '../../images/card-edit-item.svg';

import { useDispatch } from 'react-redux';
import { productAdded, decreaseAmount, changeAmount } from 'features/product-card/productCardSlice';

type Props = {
    description: string,
    price: string,
    quantity: number,
    image: string,
    subtotal: string,
    id: number,
    handleProductRemoved: Function
}

function CardItem(props: Props) {
    const dispatch = useDispatch();

    function handleProductAdd(event: any, productId: number) {
        dispatch(productAdded(productId));
    }

    function handleProductDecrease(event: any, productId: number, quantity: number) {
        dispatch(decreaseAmount({productId: productId, quantity: quantity}));
    }

    function handleOnChangeInput(event: any, productId: number) {
        event.preventDefault();

        dispatch(changeAmount({productId: productId, newQuantity: event.target.value}));
    }

    return (
        <tr className={styles["card-item"]}>
            <td className={styles["item-info"]}>
                <Link className={styles["product-image"]} to={`/product/${props.id}`}><img src={props.image} alt="Product" /></Link>
                <p className={styles["description"]}>
                    {props.description}
                </p>
            </td>
            <td className={styles["item-price"]}>
                <span>${props.price}</span>
            </td>
            <td>
                <div className={styles["number"]}>
                    <button 
                        className={styles["add-number"]}
                        onClick={(event: any) => handleProductAdd(event, props.id)}
                    ></button>
                    <input type="number" value={props.quantity} onChange={(event: any) => handleOnChangeInput(event, props.id)} />
                    <button 
                        className={styles["decrease-number"]}
                        onClick={(event: any) => handleProductDecrease(event, props.id, props.quantity)}
                    ></button>
                </div> 
            </td>
            <td className={styles["item-subtotal"]}>
                <span>${props.subtotal}</span>
            </td>
            <td className={styles["item-buttons"]}>
                <RoundButton 
                    content={<DeleteItem />}
                    buttonAction={props.handleProductRemoved}
                    itemId={props.id}
                />
                <RoundButton 
                    content={<EditItem />}
                />
            </td>
        </tr>
    );
}

export default CardItem;