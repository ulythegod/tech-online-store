import React, { ReactElement, useState } from "react";
import styles from './mobileMenu.module.scss';
import { Link } from 'react-router-dom';
import StoreButton from "../../components/Buttons/StoreButton";
import MobileMenuItem from "./MobileMenuItem";
import { MobileMenuProps } from "CustomPropsTypes";
import { ReactComponent as OpenMenuMobile } from '../../images/open-menu-mobile.svg';
import { ReactComponent as MenuLogo } from '../../images/tech-logo.svg';
import { ReactComponent as CloseMenu } from '../../images/close-menu.svg';

import { selectParentCategories } from '../../features/categories/categoriesSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Category } from "CustomTypes";

function MobileMenu(props: MobileMenuProps) {
    let categories: Category[] = [];
    const allCategories: Category[] = useSelector((state: RootState) => selectParentCategories(state));

    if (props.categories.length === 0) {
        categories = allCategories;
    } else {
        categories = props.categories;
    }    

    const [isOpen, setIsOpen] = useState(false);
    function handleMenuOpening() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }   

    let menuItems: ReactElement<any, any>[] = [];
    if (categories) {
        if (categories.length > 0) {
            menuItems = categories.map((category: any, id: number) => {
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