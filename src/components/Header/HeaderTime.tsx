import React, { useState } from 'react';
import styles from './headerTime.module.scss';
import HoverShopInfo from 'components/HoverShopInfo/HoverShopInfo';
import { ReactComponent as ArrowDown } from '../../images/arrow-down.svg';

function HeaderTime(props: any): any {
    const [isOpenShopInfo, setIsOpenShopInfo] = useState(false);

    function handleOpenShopInfo() {
        setIsOpenShopInfo(prevIsOpenShopInfo => !prevIsOpenShopInfo);
    }
    
    return (
        <div className={`${styles["header-time"]}`}>
            Mon-Thu:
            <span>9:00 AM - 5:30 PM</span>
            <a onClick={handleOpenShopInfo} href="#" className={isOpenShopInfo ? `${styles["arrow-down"]}` : ''}>
                <ArrowDown />
            </a>
            {isOpenShopInfo && <HoverShopInfo />}
        </div>
    );
}

export default HeaderTime;
