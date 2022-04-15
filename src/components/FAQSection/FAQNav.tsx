import React, { useState } from 'react';
import styles from './faqNav.module.scss';

function FAQNav() {
    const [activeItem, setActiveItem] = useState("definitions");

    function handleItemChange(event: any) {
        setActiveItem(event.target.id);       
    }

    return (
        <div className={styles["faq-navigation"]}>
            <ul>
                <li 
                    className={
                        (activeItem === "definitions") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#definitions" id="definitions" onClick={(event: any) => handleItemChange(event)}>Definitions & Interpretation</a>
                </li>
                <li
                    className={
                        (activeItem === "general") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#general" id="general" onClick={(event: any) => handleItemChange(event)}>General</a>
                </li>
                <li
                    className={
                        (activeItem === "quotations") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#quotations" id="quotations" onClick={(event: any) => handleItemChange(event)}>Quotations</a>
                </li>
                <li
                    className={
                        (activeItem === "prices") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#prices" id="prices" onClick={(event: any) => handleItemChange(event)}>Prices / Taxes</a>
                </li>
                <li
                    className={
                        (activeItem === "payment") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#payment" id="payment" onClick={(event: any) => handleItemChange(event)}>Terms of Payment</a>
                </li>
                <li
                    className={
                        (activeItem === "credits-accounts") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#credits-accounts" id="credits-accounts" onClick={(event: any) => handleItemChange(event)}>Credit Accounts</a>
                </li>
                <li
                    className={
                        (activeItem === "ownerships") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#ownerships" id="ownerships" onClick={(event: any) => handleItemChange(event)}>Change of Ownership</a>
                </li>
                <li
                    className={
                        (activeItem === "products-information") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#products-information" id="products-information" onClick={(event: any) => handleItemChange(event)}>Information on the Products supplied</a>
                </li>
                <li
                    className={
                        (activeItem === "delivery") ?
                        styles["active"] :
                        ""
                    }
                >
                    <a href="#delivery" id="delivery" onClick={(event: any) => handleItemChange(event)}>Delivery</a>
                </li>
            </ul>
        </div>
    );
}

export default FAQNav;