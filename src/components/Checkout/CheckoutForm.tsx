import React from 'react';

function CheckoutForm(props: any): any {
    return (
        <form action="#">
            <span>Shipping Address</span>
            <div className="form-item">
                <label>
                    Email Address <span>*</span>
                    <input type="email" id="email" required />
                    <span>You can create an account after checkout.</span>
                </label>
            </div>
            <div className="form-item">
                <label>
                    First Name <span>*</span>
                    <input type="text" id="first-name" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Last Name <span>*</span>
                    <input type="text" id="last-name" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Company <span>*</span>
                    <input type="text" id="company" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Street Address <span>*</span>
                    <input type="text" id="street-address-1" required></input>
                </label>
                <label>
                    <input type="text" id="street-address-2" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    City <span>*</span>
                    <input type="text" id="city" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    State/Province <span>*</span>
                    <select name="state" id="state">
                        <option value="1">Please, select a region, state or province</option>
                    </select>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Zip/Postal Code <span>*</span>
                    <input type="text" id="zip-code" required></input>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Country <span>*</span>
                    <select name="country" id="country">
                        <option value="1">United States</option>
                    </select>
                </label>
            </div>
            <div className="form-item">
                <label>
                    Phone Number <span>*</span>
                    <input type="text" id="phone-number" required></input>
                </label>
            </div>
            <div className="form-item">
                <span>Standard Rate</span>
                <div className="radio-input">
                    <label>
                        Price may vary depending on the item/destination. Shop Staff will contact you. $21.00
                        <input type="radio" id="rate" required></input>
                        <span>$21.00</span>
                    </label>
                </div>                    
            </div>
            <div className="form-item">
                <span>Pickup from store</span>
                <div className="radio-input">
                    <label>
                        1234 Street Adress City Address, 1234
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