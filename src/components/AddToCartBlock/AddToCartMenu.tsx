import React from 'react';
import styles from './addToCartMenu.module.scss';

type Props = {
    activeInfoBlock: string,
    handleInfoBlockChange: Function
}

function AddToCartMenu(props: Props) {
    return (
        <nav className={`${styles["navigation-block"]}`}>
            <div className={`${styles["product-menu"]}`}>
                <ul>
                    <li>
                        <a 
                            className={(props.activeInfoBlock === 'ProductInfoBlock') ? `${styles["active"]}` : ''}
                            href="#ProductInfoBlock"
                            onClick={(e) => props.handleInfoBlockChange(e)}
                        >
                            About Product
                        </a>
                    </li>
                    <li>
                        <a 
                            className={(props.activeInfoBlock === 'ProductDetailes') ? `${styles["active"]}` : ''}
                            href="#ProductDetailes"
                            onClick={(e) => props.handleInfoBlockChange(e)}
                        >
                            Details
                        </a>
                    </li>
                    <li>
                        <a 
                            className={(props.activeInfoBlock === 'ProductSpecs') ? `${styles["active"]}` : ''}
                            href="#ProductSpecs"
                            onClick={(e) => props.handleInfoBlockChange(e)}
                        >
                            Specs
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default AddToCartMenu;