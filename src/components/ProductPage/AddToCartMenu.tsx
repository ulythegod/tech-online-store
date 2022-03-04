import React from 'react';

class AddToCartMenu extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <nav>
                <div className="product-menu">
                    <ul>
                        <li><a href="#">About Product</a></li>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">Specs</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AddToCartMenu;