import React from 'react';
import styles from './topMenu.module.scss'
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from './TopMenuBasket';
import TopMenuNavigation from './TopMenuNavigation';
import AccountTopMenu from '../AccountTopMenu/AccountTopMenu';

function TopMenu(props: any): any {
    return (
        <div className={`${styles["header-navigation-block"]}`}>
            <nav className={`${styles["header-navigation"]}`}>
                <TopMenuNavigation />
                <div className={`${styles["main-top-tools"]}`}>
                    <TopMenuSearch />
                    <TopMenuBasket />
                    <AccountTopMenu />                    
                </div>
            </nav>
        </div>
    );
}

export default TopMenu;
