import React, { useState } from "react";
import styles from './addToCartPrices.module.scss';
import StoreButton from "components/Buttons/StoreButton";
import { ReactComponent as PayPal } from '../../images/paypal.svg';

function AddToCartPrices(props: any): any {
    const [amount, setAmount] = useState(1);

    function handleAmountIncrease() {        
        setAmount(amount + 1);
    }

    function handleAmountDecrease() {
        if (amount > 0) {
           setAmount(amount - 1); 
        }        
    }

    function handleAmountChange(event: any) {
        setAmount(Number(event.target.value));        
    }

    return (
        <div className={`${styles["prices-block"]}`}>
            <span className={`${styles["on-sale"]}`}>On Sale from <span>{`$${props.productPrice * amount}`}</span></span>
            <div className={`${styles["number"]}`}>
                <button className={`${styles["add-number"]}`} onClick={handleAmountIncrease}></button>
                <input type="number" value={amount} onChange={(event: any) => handleAmountChange(event)} />
                <button className={`${styles["decrease-number"]}`} onClick={handleAmountDecrease}></button>
            </div>                    
            <StoreButton 
                style='blue-button-narrow'
                content={"Add to Cart"}
            />
            <StoreButton 
                style='yellow-button-narrow'
                content={<PayPal />}
            />
        </div>
    )
}

export default AddToCartPrices;