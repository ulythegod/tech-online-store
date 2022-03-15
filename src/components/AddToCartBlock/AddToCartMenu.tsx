import React from 'react';
import styles from './addToCartMenu.module.scss';

class AddToCartMenu extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <nav className={`${styles["navigation-block"]}`}>
                <div className={`${styles["product-menu"]}`}>
                    <ul>
                        <li><a className={`${styles["active"]}`} href="#">About Product</a></li>
                        <li><a href="#">Details</a></li>
                        <li><a href="#">Specs</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default AddToCartMenu;