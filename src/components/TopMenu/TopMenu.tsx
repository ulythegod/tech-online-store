import React, {useState} from 'react';
import styles from './topMenu.module.scss'
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from '../TopMenuBasket/TopMenuBasket';
import TopMenuNavigation from './TopMenuNavigation';
import AccountTopMenu from '../AccountTopMenu/AccountTopMenu';
import classNames from 'classnames';

function TopMenu(props: any): any {
    const [isOpenSearchPannel, setIsOpenSearchPannel] = useState(false);

    function handleOpenSearchPannel() {
        setIsOpenSearchPannel(prevIsOpenSearchPannel => !prevIsOpenSearchPannel);
    }

    return (
        <div className={`${styles["header-navigation-block"]}`}>
            <nav className={`${styles["header-navigation"]}`}>
                <TopMenuNavigation 
                   isOpenSearchPannel={isOpenSearchPannel}                
                />
                <div className={!isOpenSearchPannel ? `${styles["main-top-tools"]}` : `${classNames(styles["main-top-tools"], styles["main-top-tools-open"])}`}>
                    <TopMenuSearch 
                        isOpenSearchPannel={isOpenSearchPannel}
                        handleOpenSearchPannel={handleOpenSearchPannel}
                    />
                    <TopMenuBasket />
                    <AccountTopMenu />                    
                </div>
            </nav>
        </div>
    );
}

export default TopMenu;
