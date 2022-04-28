import React, { useState } from "react";
import styles from './footerMenuItem.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FooterMenuItemProps } from 'CustomPropsTypes';

function FooterMenuItem(props: FooterMenuItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuOpen() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <li>
            <Link 
                className={styles["menu-title"]}
                onClick={handleMenuOpen}
                to={
                    props.id ?
                    `/catalog/${props.id}` :
                    ``
                }
            >
                {props.name}
                <span className={!isOpen ? styles["arrow-sign"] : styles["arrow-sign-open"]}></span>
            </Link>
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