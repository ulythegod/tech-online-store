import React from 'react';

class SmallBasketItem extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="basket-list-item">
                <span>1 x</span>
                <img src="./images/small-basket.png" alt=""/>
                <p>
                    EX DISPLAY : MSI Pro 16 Flex-036AU 
                    15.6 MULTITOUCH All-In-On...
                </p>
                <div className="item-buttons">
                    <button>
                        <img src="./images/prod-add-fav.png" alt=""/>
                    </button>
                    <button>
                        <img src="./images/prod-add-rating.png" alt=""/>
                    </button>
                </div>
            </div>
        );
    }
}

export default SmallBasketItem;
