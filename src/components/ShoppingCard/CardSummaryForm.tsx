import React from 'react';
import { ReactComponent as ZipLogo } from '../../images/zip-logo.svg';
import { ReactComponent as PayPal } from '../../images/paypal.svg';

class CardSummaryForm extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <form action="#">
                <a href="#">Estimate Shipping and Tax</a>
                <div className="estimated-inner">
                    <p>Enter your destination to get a shipping estimate.</p>                            
                        <label>
                            Country
                            <select name="country" id="country">
                                <option value="1">Australia</option>
                            </select>
                        </label>
                        <label>
                            State/Province
                            <input type="text" id="state"></input>
                        </label>
                        <label>
                            Zip/Postal Code
                            <input type="text" id="code"></input>
                        </label>
                        <label>
                            Standard Rate
                            <input type="radio" id="rate"></input>
                            <span>Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</span>
                        </label>
                        <label>
                            Pickup from store
                            <input type="radio" id="store"></input>
                            <span>1234 Street Adress City Address, 1234 $0.00</span>
                        </label>                          
                </div>
                <a href="#">Apply Discount Code</a>
                <div className="discount">
                    <label>
                        Enter discount code
                        <input type="text" id="discount-code" placeholder="Enter Discount code"></input>
                    </label>
                    <button>Apply Discount</button>
                </div>
                <div className="summary-info">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$13,047.00</td>
                            </tr>
                            <tr>
                                <td>
                                    Shipping
                                    <p>
                                        (Standard Rate - Price may vary depending on the 
                                        item/destination. Shop Staff will contact you.)
                                    </p>
                                </td>
                                <td>$21.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$1.91</td>
                            </tr>
                            <tr>
                                <td>GST (10%)</td>
                                <td>$1.91</td>
                            </tr>
                            <tr>
                                <td>Order Total</td>
                                <td>$13,068.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Proceed to Checkout</button>
                    <button>
                        Check out with
                        <PayPal />
                    </button>
                    <button>
                        Check Out with Multiple Addresses
                    </button>
                </div>
                <div>
                    <ZipLogo />
                    <span>own it now, up to 6 months interest free learn more</span>
                </div>
            </form>
        );
    }
}

export default CardSummaryForm;