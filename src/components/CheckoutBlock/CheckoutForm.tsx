import React from 'react';
import styles from './checkoutForm.module.scss';
import InputMask from "react-input-mask";
import StoreButton from 'components/Buttons/StoreButton';
import FormItemText from '../FormItem/FormItemText';

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
            <FormItemText
                label='First Name'
                required={true}
                type="text"
                id='first-name'
                placeholder='First Name'
                isNarrow={true}
            />
            <FormItemText
                label='Last Name'
                required={true}
                type="text"
                id='last-name'
                placeholder='Last Name'
                isNarrow={true}
            />
            <FormItemText
                label='Company'
                required={true}
                type="text"
                id='company'
                placeholder='Company'
                isNarrow={true}
            />
            <FormItemText
                label='Street Address'
                required={true}
                type="text"
                id='street-address-1'
                placeholder=''
                isNarrow={true}
            />
            <FormItemText
                label=''
                required={true}
                type="text"
                id='street-address-2'
                placeholder=''
                isNarrow={true}
            />
            <FormItemText
                label='City'
                required={true}
                type="text"
                id='city'
                placeholder='City'
                isNarrow={true}
            />
            <div className={styles["form-item"]}>
                <label htmlFor='state'>
                    <span>State/Province <span>*</span></span>
                    <select className={styles["form-select"]} name="state" id="state">
                        <option value="1">Please, select a region, state or province</option>
                    </select>
                </label>
            </div>
            <FormItemText
                label='Zip/Postal Code'
                required={true}
                type="text"
                id='zip-code'
                placeholder=''
                isNarrow={true}
                mask={"999999"}
            />
            <div className={styles["form-item"]}>
                <label htmlFor='country'>
                    <span>Country <span>*</span></span>
                    <select className={styles["form-select"]} name="country" id="country">
                        <option value="1">United States</option>
                    </select>
                </label>
            </div>
            <FormItemText
                label='Phone Number'
                required={true}
                type="text"
                id='phone-number'
                placeholder=''
                isNarrow={true}
                mask={"+7 (999) 999-99-99"}
            />
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
                buttonStyle="blue-button-narrow"
                content={"Next"}
            />
        </form>
    );
}

export default CheckoutForm;