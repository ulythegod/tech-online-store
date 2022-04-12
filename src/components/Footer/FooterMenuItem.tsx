import React, { ReactElement, useState } from "react";
import styles from './footerMenuItem.module.scss';
import classNames from 'classnames';

type Props = {
    name: string,
    isContacts?: boolean,
    items: ReactElement<any, any>
}

function FooterMenuItem(props: Props) {
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