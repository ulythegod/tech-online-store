import React from 'react';
import { ReactComponent as DeleteItem } from '../../images/card-delete-item.svg';
import { ReactComponent as EditItem } from '../../images/card-edit-item.svg';

interface ComponentProps {
    image: string;
    description: string;
    price: number;
    quantity: number;
    subtotal: number;
}

class CardItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <tr>
                <td>
                    <img src={this.props.image} alt=""/>
                </td>
                <td>
                    <p>
                        {this.props.description}
                    </p>
                </td>
                <td>
                    <span>${this.props.price}</span>
                </td>
                <td>
                    <input type="number" value={this.props.quantity}/>
                </td>
                <td>
                    <span>${this.props.subtotal}</span>
                    <div>
                        <button><DeleteItem /></button>
                        <button><EditItem /></button>                                    
                    </div>
                </td>
            </tr>
        );
    }
}

export default CardItem;