import React, { useState } from 'react';
import styles from './accountTopMenu.module.scss';
import avatar from '../../images/avatar.png';
import MenuList from './MenuList';

function AccountTopMenu(props: any): any {
    const [isDisplayMenu, setIsDisplayMenu] = useState(false);

    const displayMenu = () => {
        setIsDisplayMenu(prevIsDisplayMenu => !prevIsDisplayMenu);
    }

    return (
        <div className={`${styles["account-block"]}`} onClick={displayMenu}>
            <img src={avatar} alt="avatar"/>
            {isDisplayMenu && <MenuList />}
        </div>
    )
}

export default AccountTopMenu;