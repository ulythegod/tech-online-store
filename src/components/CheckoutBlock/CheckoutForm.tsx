import React from 'react';
import styles from './checkoutForm.module.scss';

function CheckoutForm(props: any): any {
    return (
        <form className={`${styles["checkout-form"]}`} action="#">
            <span>Shipping Address</span>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Email Address <span>*</span></span>
                    <input type="email" id="email" required />
                    <span>You can create an account after checkout.</span>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>First Name <span>*</span></span>
                    <input type="text" id="first-name" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Last Name <span>*</span></span>
                    <input type="text" id="last-name" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Company <span>*</span></span>
                    <input type="text" id="company" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Street Address <span>*</span></span>
                    <input type="text" id="street-address-1" required></input>
                </label>
                <label>
                    <input type="text" id="street-address-2" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>City <span>*</span></span>
                    <input type="text" id="city" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>State/Province <span>*</span></span>
                    <select name="state" id="state">
                        <option value="1">Please, select a region, state or province</option>
                    </select>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Zip/Postal Code <span>*</span></span>
                    <input type="text" id="zip-code" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    <span>Country <span>*</span></span>
                    <select name="country" id="country">
                        <option value="1">United States</option>
                    </select>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <label>
                    <span>Phone Number <span>*</span></span>
                    <input type="text" id="phone-number" required></input>
                </label>
            </div>
            <div className={`${styles["form-item"]}`}>
                <span>Standard Rate</span>
                <div className="radio-input">
                    <label>
                        <span>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</span>
                        <input type="radio" id="rate" required></input>
                        <span>$21.00</span>
                    </label>
                </div>                    
            </div>
            <div className={`${styles["form-item"]}`}>
                <span>Pickup from store</span>
                <div className="radio-input">
                    <label>
                        <span>1234 Street Adress City Address, 1234</span>
                        <input type="radio" id="rate" required></input>
                        <span>$0.00</span>
                    </label>
                </div>                    
            </div>
            <button>Next</button>
        </form>
    );
}

export default CheckoutForm;