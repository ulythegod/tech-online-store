import React from 'react';
import styles from './headerTime.module.scss';
import { ReactComponent as ArrowDown } from '../../images/arrow-down.svg';

function HeaderTime(props: any): any {
    return (
        <p className={`${styles["header-time"]}`}>
            Mon-Thu:
            <span>9:00 AM - 5:30 PM</span>
            <a href="#">
                <ArrowDown />
            </a>
        </p>
    );
}

export default HeaderTime;
