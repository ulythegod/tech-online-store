import React from 'react';

function SummaryItem(props: any): any {
    return (
        <div className="summary-item">
            <img src={props.image} alt=""/>
            <div className="item-info">
                <span>{props.name}</span>
                <span>Qty <span>{props.amount} ${props.price}</span></span>
            </div>
        </div>
    );
}

export default SummaryItem;