import React, {useState} from 'react';
import styles from './topMenu.module.scss'
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from '../TopMenuBasket/TopMenuBasket';
import TopMenuNavigation from './TopMenuNavigation';
import AccountTopMenu from '../AccountTopMenu/AccountTopMenu';
import classNames from 'classnames';
import { ReactComponent as LogoWhite } from '../../images/logo-white.svg';
import { ReactComponent as OpenMenuMobile } from '../../images/open-menu-mobile.svg';
import { ReactComponent as SearchImageMobile } from '../../images/search-image-mobile.svg';

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
            <nav className={`${styles["header-navigation-mobile"]}`}>
                <div className={`${styles["mobile-logo"]}`}>
                    <LogoWhite />
                </div>
                <div>
                    <button>
                        <OpenMenuMobile />
                    </button>
                    <div>
                        <SearchImageMobile />
                        <input type="text" />
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}

export default TopMenu;
