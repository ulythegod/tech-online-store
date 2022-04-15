import React from 'react';
import styles from './contactsBlock.module.scss';
import { ReactComponent as ContactsAdress } from '../../images/contacts-adress.svg';
import { ReactComponent as ContactsPhone } from '../../images/contacts-phone.svg';
import { ReactComponent as ContactsTime } from '../../images/contacts-time.svg';
import { ReactComponent as ContactsMail } from '../../images/contacts-mail.svg';

function ContactsBlock() {
    return (
        <div className={styles["contacts-block"]}>
            <div className={styles["contact-item"]}>
                <ContactsAdress />
                <div className={styles["item-description"]}>
                    <span className={styles["title"]}>Address:</span>
                    <span className={styles["info"]}>1234 Street Adress City Address, 1234</span>
                </div>
            </div>
            <div className={styles["contact-item"]}>
                <ContactsPhone />
                <div className={styles["item-description"]}>
                    <span className={styles["title"]}>Phone:</span>
                    <a className={styles["info"]} href='tel:00-1234-5678'>(00)1234 5678</a>
                </div>
            </div>
            <div className={styles["contact-item"]}>
                <ContactsTime />
                <div className={styles["item-description"]}>
                    <span className={styles["title"]}>We are open:</span>
                    <div className={styles["info"]}>
                        Monday - Thursday: 9:00 AM - 5:30 PM<br />
                        Friday 9:00 AM - 6:00 PM<br />
                        Saturday: 11:00 AM - 5:00 PM
                    </div>
                </div>
            </div>
            <div className={styles["contact-item"]}>
                <ContactsMail />
                <div className={styles["item-description"]}>
                    <span className={styles["title"]}>E-mail:</span>
                    <a className={styles["link"]} href="mailto:shop@email.com">shop@email.com</a>
                </div>
            </div>
        </div>
    );
}

export default ContactsBlock;