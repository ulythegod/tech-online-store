import React from "react";
import styles from './hoverShopInfo.module.scss';
import { ReactComponent as ContactsAdress } from '../../images/contacts-adress.svg';
import { ReactComponent as ContactsTime } from '../../images/contacts-time.svg';

function HoverShopInfo() {
    return (
        <>
            <div className={styles["contacts-time"]}>
                <ContactsTime />
                <div className={styles["time-info"]}>
                    We are open:
                    <span className={styles["time-item"]}>Mon-Thu: <span>9:00 AM - 5:30 PM</span></span>
                    <span className={styles["time-item"]}>Fr: <span>9:00 AM - 6:00 PM</span></span>
                    <span className={styles["time-item"]}>Sat: <span>11:00 AM - 5:00 PM</span></span>
                </div>
            </div>
            <div className={styles["contacts-adress"]}>
                <ContactsAdress />
                <span className={styles["adress-text"]}>Address: 1234 Street Adress, City Address, 1234</span>
            </div>
            <div className={styles["contacts-rest"]}>
                <span className={styles["rest-item"]}>Phones: <a href="tel:0012345678">(00) 1234 5678</a></span>
                <span className={styles["rest-item"]}>E-mail: <a href="mailto:shop@email.com">shop@email.com</a></span>
            </div>
        </>
    )
}

export default HoverShopInfo;