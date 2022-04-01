import React, { useState } from "react";
import styles from './mobileMenu.module.scss';
import { Link } from 'react-router-dom';
import StoreButton from "components/Buttons/StoreButton";
import { ReactComponent as OpenMenuMobile } from '../../images/open-menu-mobile.svg';
import { ReactComponent as MenuLogo } from '../../images/tech-logo.svg';
import { ReactComponent as CloseMenu } from '../../images/close-menu.svg';

function MobileMenu(props: any): any {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuOpening() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <>
            <button 
                className={`${styles["open-menu-button"]}`}
                onClick={() => handleMenuOpening()}
            >
                <OpenMenuMobile />
            </button>
            <div className={isOpen ? `${styles["mobile-menu"]}` : `${styles["hidden"]}`}>
                <ul className={`${styles["items-list"]}`}>
                    <li className={`${styles["menu-logo"]}`}>
                        <Link to="/">
                            <MenuLogo />
                        </Link>
                        <button
                            className={`${styles["close-menu-button"]}`}
                            onClick={() => handleMenuOpening()}
                        >
                            <CloseMenu />
                        </button>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"Laptops"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"Desktop PCs"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"Networking Devices"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"Printers & Scanners"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"PC Parts"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"All Other Product"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li className={`${styles["menu-link-inner"]}`}>
                        <Link to={"/catalog"}>
                            {"Repairs"}
                        </Link>
                        <span className={`${styles["link-arrow"]}`}></span>
                    </li>
                    <li>
                        <StoreButton
                            style="light-button"
                            content='Our Deals'
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu;