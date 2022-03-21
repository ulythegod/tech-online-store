import React from 'react';
import CardItem from './CardItem';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';

function CardLists(props: any): any {
    return (
        <div className="items-list">
            <div className='list-table'>
                <table>
                    <tbody>
                        <tr>
                            <td>Item</td>
                            <td>Price</td>
                            <td>Qty</td>
                            <td>Subtotal</td>
                        </tr>
                        <CardItem
                            image={card1}
                            description={`
                                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 
                                SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming 
                                Keyboard and Mouse 3 Years Warranty
                            `}
                            price={4349.00}
                            quantity={2}
                            subtotal={13047.00}
                        />
                        <CardItem
                            image={card2}
                            description={`
                                MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 
                                SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming 
                                Keyboard and Mouse 3 Years Warranty
                            `}
                            price={4349.00}
                            quantity={2}
                            subtotal={13047.00}
                        />
                    </tbody>
                </table>
            </div>
            <div className="card-buttons">
                <button>Continue Shopping</button>
                <button>Clear Shopping Cart</button>
                <button>Update Shopping Cart</button>
            </div>
        </div>
    );
}

export default CardLists;