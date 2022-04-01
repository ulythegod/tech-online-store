import React, { useState } from 'react';
import styles from './accountTopMenu.module.scss';
import avatar from '../../images/avatar.png';
import MenuList from './MenuList';
import { ReactComponent as UserIconMobile } from '../../images/user-icon-mobile.svg';

function AccountTopMenu(props: any): any {
    const [isDisplayMenu, setIsDisplayMenu] = useState(false);

    const displayMenu = () => {
        setIsDisplayMenu(prevIsDisplayMenu => !prevIsDisplayMenu);
    }

    return (
        <>
            <div className={`${styles["account-block"]}`} onClick={displayMenu}>
                <img src={avatar} alt="avatar"/>
                {isDisplayMenu && <MenuList />}
            </div>
            <div className={`${styles["user-icon-mobile"]}`} onClick={displayMenu}>
                <UserIconMobile />
                {isDisplayMenu && <MenuList />}
            </div>
        </>
    )
}

export default AccountTopMenu;