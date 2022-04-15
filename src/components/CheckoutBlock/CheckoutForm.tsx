import React from 'react';
import styles from './checkoutForm.module.scss';
import InputMask from "react-input-mask";
import StoreButton from 'components/Buttons/StoreButton';

function CheckoutForm() {
    const emailMask = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/";

    return (
        <form className={styles["checkout-form"]} action="#">
            <span className={styles["form-title"]}>Shipping Address</span>
            <div className={styles["form-separator"]}></div>
            <div className={styles["form-item"]}>
                <label htmlFor='email'>
                    <span>Email Address <span>*</span></span>
                    <input className={styles["form-input"]} type="email" id="email" required pattern={emailMask} />
                    <span className={styles["form-note"]}>You can create an account after checkout.</span>
                    <div className={styles["form-separator"]}></div>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='first-name'>
                    <span>First Name <span>*</span></span>
                    <input className={styles["form-input"]} type="text" id="first-name" required></input>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='last-name'>
                    <span>Last Name <span>*</span></span>
                    <input className={styles["form-input"]} type="text" id="last-name" required></input>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='company'>
                    <span>Company <span>*</span></span>
                    <input className={styles["form-input"]} type="text" id="company" required></input>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='street-address-1'>
                    <span>Street Address <span>*</span></span>
                    <input className={styles["form-input"]} type="text" id="street-address-1" required></input>
                </label>
                <label htmlFor='street-address-2'>
                    <input className={styles["form-input"]} type="text" id="street-address-2" required></input>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='city'>
                    <span>City <span>*</span></span>
                    <input className={styles["form-input"]} type="text" id="city" required></input>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='state'>
                    <span>State/Province <span>*</span></span>
                    <select className={styles["form-select"]} name="state" id="state">
                        <option value="1">Please, select a region, state or province</option>
                    </select>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='zip-code'>
                    <span>Zip/Postal Code <span>*</span></span>
                    <InputMask mask="999999" className={styles["form-input"]} id="zip-code" required/>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='country'>
                    <span>Country <span>*</span></span>
                    <select className={styles["form-select"]} name="country" id="country">
                        <option value="1">United States</option>
                    </select>
                </label>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor='phone-number'>
                    <span>Phone Number <span>*</span></span>
                    <InputMask mask="+7 (999) 999-99-99" className={styles["form-input"]} id="phone-number" required/>
                </label>
            </div>
            <div className={styles["form-separator"]}></div>
            <div className={styles["form-radio-item"]}>
                <span>Standard Rate</span>
                <div className="radio-input">
                    <label className={styles["radio-label"]} htmlFor='rate'>
                        <div className={styles["radio-input"]}>
                            <input className={styles["radio-input-field"]} checked type="radio" id="rate"></input>
                            <div className={styles["radio-input-button"]}></div>
                            <div className={styles["radio-input-text"]}>Price may vary depending on the item/destination. Shop Staff will contact you.</div>
                        </div>
                        <div className={styles["radio-price"]}>$21.00</div>
                    </label>
                </div>                    
            </div>
            <div className={styles["form-radio-item"]}>
                <span>Pickup from store</span>
                <div className="radio-input">
                    <label className={styles["radio-label"]} htmlFor='pickup'>
                        <div className={styles["radio-input"]}>
                            <input className={styles["radio-input-field"]} type="radio" id="pickup"></input>
                            <div className={styles["radio-input-button"]}></div>
                            <div className={styles["radio-input-text"]}>1234 Street Adress City Address, 1234</div>
                        </div>
                        <div className={styles["radio-price"]}>$0.00</div>
                    </label>
                </div>                    
            </div>
            <StoreButton 
                style="blue-button-narrow"
                content={"Next"}
            />
        </form>
    );
}

export default CheckoutForm;