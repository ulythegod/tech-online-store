import React, { useState } from "react";
import styles from './footerMenuItem.module.scss';
import classNames from 'classnames';

function FooterMenuItem(props: any): any {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuOpen() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <li>
            <a 
                className={`${styles["menu-title"]}`}
                onClick={handleMenuOpen}
            >
                {props.name}
                <span className={!isOpen ? `${styles["arrow-sign"]}` : `${styles["arrow-sign-open"]}`}></span>
            </a>
            <ul 
                className={`${classNames(
                    styles["inner-items"],
                    `${!isOpen ? styles["inner-items-closed"] : ""}`, 
                    `${props.isContacts ? styles["inner-items-contacts"] : ""}`
                )}`}
            >
                {props.items}
            </ul>
        </li>
    )
}

export default FooterMenuItem;