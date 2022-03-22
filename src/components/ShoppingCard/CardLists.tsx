import React from 'react';
import styles from './cardList.module.scss';
import CardItem from './CardItem';
import StoreButton from 'components/CommonComponents/StoreButton';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';

function CardLists(props: any): any {
    return (
        <div className={`${styles["items-list"]}`}>
            <div>
                <table className={`${styles["list-table"]}`}>
                    <tbody>
                        <tr className={`${styles["table-title"]}`}>
                            <td>Item</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Subtotal</td>
                            <td></td>
                        </tr>
                        <CardItem
                            image={card1}
                            description={`
                                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 
                                SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming 
                                Keyboard and Mouse 3 Years Warranty
                            `}
                            price={"4,349.00"}
                            quantity={2}
                            subtotal={"13,047.00"}
                        />
                        <CardItem
                            image={card2}
                            description={`
                                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 
                                SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming 
                                Keyboard and Mouse 3 Years Warranty
                            `}
                            price={"4,349.00"}
                            quantity={2}
                            subtotal={"13,047.00"}
                        />
                    </tbody>
                </table>
            </div>
            <div className={`${styles["card-buttons"]}`}>
                <div className={`${styles["inner-buttons"]}`}>
                    <StoreButton 
                        style="grey-button"
                        content="Continue Shopping"
                    />
                    <StoreButton 
                        style="black-button"
                        content="Clear Shopping Cart"
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