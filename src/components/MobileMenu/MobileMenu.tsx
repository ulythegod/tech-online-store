import React, { useState } from "react";
import styles from './mobileMenu.module.scss';
import { Link } from 'react-router-dom';
import StoreButton from "../../components/Buttons/StoreButton";
import MobileMenuItem from "./MobileMenuItem";
import { Category } from "CustomTypes";
import { ReactComponent as OpenMenuMobile } from '../../images/open-menu-mobile.svg';
import { ReactComponent as MenuLogo } from '../../images/tech-logo.svg';
import { ReactComponent as CloseMenu } from '../../images/close-menu.svg';

type Props = {
    categories: Category[]
}

function MobileMenu(props: Props) {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenuOpening() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    let menuItems: any [] = [];
    if (props.categories) {
        if (props.categories.length > 0) {
            menuItems = props.categories.map((category: any, id: number) => {
                return (
                    <MobileMenuItem 
                        key={category.id}
                        name={category.name}
                        id={category.id}
                        subCategories={category.subCategories}
                    />
                )
            }) 
        }
    }

    return (
        <>
            <button 
                className={styles["open-menu-button"]}
                onClick={() => handleMenuOpening()}
            >
                <OpenMenuMobile />
            </button>
            <div className={isOpen ? styles["mobile-menu"] : styles["hidden"]}>
                <ul className={styles["items-list"]}>
                    <li className={styles["menu-logo"]}>
                        <Link to="/">
                            <MenuLogo />
                        </Link>
                        <button
                            className={styles["close-menu-button"]}
                            onClick={() => handleMenuOpening()}
                        >
                            <CloseMenu />
                        </button>
                    </li>
                    {menuItems}
                    <li className={styles["menu-button"]}>
                        <StoreButton
                            buttonStyle="light-button"
                            content='Our Deals'
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu;