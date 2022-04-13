import React, { useState } from 'react';
import styles from './cardSummaryForm.module.scss';
import StoreButton from 'components/Buttons/StoreButton';
import InputMask from "react-input-mask";
import classNames from 'classnames';
import { ReactComponent as ZipLogo } from '../../images/zip-logo.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';

type Props = {
    subtotal: number
}

function CardSummaryForm(props: Props) {
    const [isOpenEstimateShippingAndTax, setIsOpenEstimateShippingAndTax] = useState(false);
    const [isOpenApplyDiscountCode, setIsOpenApplyDiscountCode] = useState(false);

    function handleOpenFormPart(event: any, partName: string) {
        event.preventDefault();

        if (partName === "estimateShippingAndTax") {
            setIsOpenEstimateShippingAndTax(
                prevIsOpenEstimateShippingAndTax => !prevIsOpenEstimateShippingAndTax
            );
        } else if (partName === "applyDiscountCode") {
            setIsOpenApplyDiscountCode(
                prevIsOpenApplyDiscountCode => !prevIsOpenApplyDiscountCode
            );
        }
    }

    return (
        <div className={`${styles["card-summary"]}`}>
            <form action="#" className={`${styles["summary-form"]}`}>
                <span className={`${styles["form-title"]}`}>Summary</span>
                <div className={`${styles["form-unit-title"]}`}>
                    <a onClick={(event) => handleOpenFormPart(event, "estimateShippingAndTax")} href="#">
                        Estimate Shipping and Tax
                        <span 
                            className={isOpenEstimateShippingAndTax ? `${styles["opened-unit"]}` : `${styles["closed-unit"]}`}
                        ></span>
                    </a>
                </div>
                <div className={`${styles["form-block-inner"]}`}>
                    <p>Enter your destination to get a shipping estimate.</p>                            
                    <label htmlFor='country' className={isOpenEstimateShippingAndTax ? `${styles["form-block-inner-input"]}` : `${styles["hidden"]}`}>
                        <span>Country</span>
                        <select name="country" id="country">
                            <option value="1">Australia</option>
                        </select>
                    </label>
                    <label htmlFor='state' className={isOpenEstimateShippingAndTax ? `${styles["form-block-inner-input"]}` : `${styles["hidden"]}`}>
                        <span>State/Province</span>
                        <input type="text" id="state"></input>
                    </label>
                    <label htmlFor='code' className={isOpenEstimateShippingAndTax ? `${styles["form-block-inner-input"]}` : `${styles["hidden"]}`}>
                        <span>Zip/Postal Code</span>
                        <InputMask mask="999999" id="code" />
                    </label>
                    <label htmlFor='rate' className={isOpenEstimateShippingAndTax ? `${styles["form-block-inner-input"]}` : `${styles["hidden"]}`}>
                        <span>Standard Rate</span>
                        <div className={`${styles["radio-input"]}`}>
                            <input className={`${styles["radio-input-field"]}`} checked type="radio" id="rate"></input>
                            <span className={`${styles["radio-input-button"]}`}></span>
                            <span className={`${styles["radio-input-text"]}`}>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</span>
                        </div>
                    </label>
                    <label htmlFor='store' className={isOpenEstimateShippingAndTax ? `${styles["form-block-inner-input"]}` : `${styles["hidden"]}`}>
                        <span>Pickup from store</span>
                        <div className={`${styles["radio-input"]}`}>
                            <input className={`${styles["radio-input-field"]}`} type="radio" id="store"></input>
                            <span className={`${styles["radio-input-button"]}`}></span>
                            <span className={`${styles["radio-input-text"]}`}>1234 Street Adress City Address, 1234 $0.00</span>
                        </div>
                    </label>                          
                </div>
                <div className={`${styles["form-unit-title"]}`}>
                    <a onClick={(event) => handleOpenFormPart(event, "applyDiscountCode")} href="#">
                        Apply Discount Code
                        <span 
                            className={isOpenApplyDiscountCode ? `${styles["opened-unit"]}` : `${styles["closed-unit"]}`}
                        ></span>
                    </a>
                </div>
                <div className={isOpenApplyDiscountCode ? `${styles["form-block-inner"]}` : `${styles["hidden"]}`}>
                    <label htmlFor='discount-code' className={`${styles["form-block-inner-input"]}`}>
                        <span>Enter discount code</span>
                        <InputMask mask="999999" id="discount-code" placeholder="Enter Discount code" />
                    </label>
                    <StoreButton 
                        style="light-button"
                        content={"Apply Discount"}
                    />
                </div>                
                <div className={`${styles["summary-info"]}`}>
                    <div className={`${styles["summary-item"]}`}>
                        <div>Subtotal</div>
                        <span>${props.subtotal}</span>
                    </div>
                    <div className={`${styles["summary-item"]}`}>
                        <div>
                            Shipping
                            <p className={`${styles["summary-item-note"]}`}>
                                (Standard Rate - Price may vary depending on the 
                                item/destination. Shop Staff will contact you.)
                            </p>
                        </div>
                        <span>$21.00</span>
                    </div>
                    <div className={`${styles["summary-item"]}`}>
                        <div>Tax</div>
                        <span>$1.91</span>
                    </div>
                    <div className={`${styles["summary-item"]}`}>
                        <div>GST (10%)</div>
                        <span>$1.91</span>
                    </div>
                    <div className={`${classNames(styles["summary-item"], styles["summary-total"])}`}>
                        <div>Order Total</div>
                        <span>$13,068.00</span>
                    </div>
                    <StoreButton 
                        style="blue-button"
                        content={"Proceed to Checkout"}
                    />
                    <StoreButton 
                        style="yellow-button-general"
                        content={
                            <>
                                Check out with
                                <PayPal />
                            </>
                        }
                    />
                    <StoreButton 
                        style="grey-button-general"
                        content={"Check Out with Multiple Addresses"}
                    />
                </div>
                <div className={`${styles["zip-block"]}`}>
                    <ZipLogo className={`${styles["zip-logo"]}`} />
                    <span className={`${styles["zip-line"]}`}><span>own</span> it now, up to 6 months interest free <a href="#">learn more</a></span>
                </div>
            </form>
        </div>
    );
}

export default CardSummaryForm;