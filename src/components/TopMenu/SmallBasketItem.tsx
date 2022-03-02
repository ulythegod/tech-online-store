import React from 'react';
import { ReactComponent as RemoveItem } from '../../images/prod-remove-item.svg';
import { ReactComponent as EditItem } from '../../images/prod-edit-item.svg';

interface CustomInputProps {
    amount: number;
    imagePath: any;
    name: string;
}

class SmallBasketItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="basket-list-item">
                <span>{this.props.amount} x</span>
                <img src={this.props.imagePath} alt=""/>
                <p>
                    {this.props.name}
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
}

export default SmallBasketItem;
