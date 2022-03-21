import React from 'react';

function FAQNav(props: any): any {
    return (
        <div className="faq-navigation">
            <ul>
                <li>
                    <a className="active" href="#definitions">Definitions & Interpretation</a>
                </li>
                <li>
                    <a href="#general">General</a>
                </li>
                <li>
                    <a href="#quotations">Quotations</a>
                </li>
                <li>
                    <a href="#prices">Prices / Taxes</a>
                </li>
                <li>
                    <a href="#payment">Terms of Payment</a>
                </li>
                <li>
                    <a href="#credits-accounts">Credit Accounts</a>
                </li>
                <li>
                    <a href="#ownerships">Change of Ownership</a>
                </li>
                <li>
                    <a href="#products-information">Information on the Products supplied</a>
                </li>
                <li>
                    <a href="#delivery">Delivery</a>
                </li>
            </ul>
        </div>
    );
}

export default FAQNav;