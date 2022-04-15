import React, { ReactElement } from 'react';
import styles from './cardList.module.scss';
import CardItem from './CardItem';
import StoreButton from 'components/Buttons/StoreButton';
import { Product } from 'CustomTypes';

import { useDispatch } from 'react-redux';
import { productRemoved, clearCard } from 'features/product-card/productCardSlice';

type Props = {
    products: Product[],
    idsCounts: number[]
}

function CardLists(props: Props) {
    const dispatch = useDispatch();

    function handleProductRemoved(event: any, productId: number) {        
        dispatch(productRemoved(productId))
    }
    
    function handleClearCard(event: any) {
        dispatch(clearCard(event));
    }

    const cardItems: ReactElement<any, any>[] = props.products.map((product: Product, id: number) => {
        return (
            <CardItem
                key={product.id}
                image={product.photo[0].url}
                description={product.name}
                price={product.price}
                quantity={props.idsCounts[product.id]}
                subtotal={String(props.idsCounts[product.id] * Number(product.price))}
                id={product.id}
                handleProductRemoved={handleProductRemoved}
            />
        )
    });

    return (
        <div className={styles["items-list"]}>
            <div>
                {
                    cardItems &&
                    <table className={styles["list-table"]}>
                        <tbody>
                            <tr className={styles["table-title"]}>
                                <td>Item</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Subtotal</td>
                                <td></td>
                            </tr>
                            {cardItems}
                        </tbody>
                    </table>
                }
                
            </div>
            <div className={styles["card-buttons"]}>
                <div className={styles["inner-buttons"]}>
                    <StoreButton 
                        style="grey-button"
                        content="Continue Shopping"
                    />
                    <StoreButton 
                        style="black-button"
                        content="Clear Shopping Cart"
                        buttonAction={handleClearCard}
                    />
                </div>
                <StoreButton 
                    style="black-button"
                    content="Update Shopping Cart"
                />
            </div>
        </div>
    );
}

export default CardLists;