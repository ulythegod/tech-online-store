import React from 'react';

interface ComponentProps {
    amount: number;
    price: number;
    name: string;
    image: string;
}

class SummaryItem extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="summary-item">
                <img src={this.props.image} alt=""/>
                <div className="item-info">
                    <span>{this.props.name}</span>
                    <span>Qty <span>{this.props.amount} ${this.props.price}</span></span>
                </div>
            </div>
        );
    }
}

export default SummaryItem;