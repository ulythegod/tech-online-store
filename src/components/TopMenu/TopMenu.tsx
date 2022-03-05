import React from 'react';
import styles from './topMenu.module.scss'
import TopMenuSearch from './TopMenuSearch';
import TopMenuBasket from './TopMenuBasket';
import TopMenuNavigation from './TopMenuNavigation';
import avatar from '../../images/avatar.png';

class TopMenu extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={`${styles["header-navigation-block"]}`}>
                <nav className={`${styles["header-navigation"]}`}>
                    <TopMenuNavigation />
                    <div className={`${styles["main-top-tools"]}`}>
                        <TopMenuSearch />
                        <TopMenuBasket />
                        <a href="#"><img src={avatar} alt="avatar"/></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopMenu;
