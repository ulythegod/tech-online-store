import React from 'react';
import styles from './dashboardMenu.module.scss';

function DashboardMenu() {
    return (
        <ul className={`${styles["menu"]}`}>
            <li className={`${styles["menu-block"]}`}>
                <ul>
                    <li className={`${styles["active"]}`}>
                        <a href="#">Account Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Account Information</a>
                    </li>
                    <li>
                        <a href="#">Address Book</a>
                    </li>
                    <li>
                        <a href="#">My Orders</a>
                    </li>
                </ul>
            </li>
            <li className={`${styles["menu-block"]}`}>
                <ul>
                    <li>
                        <a href="#">My Downloadable Products</a>
                    </li>
                    <li>
                        <a href="#">Stored Payment Methods</a>
                    </li>
                    <li>
                        <a href="#">Billing Agrements</a>
                    </li>
                    <li>
                        <a href="#">My Wish List</a>
                    </li>
                </ul>
            </li>
            <li className={`${styles["menu-block"]}`}>
                <ul>
                    <li>
                        <a href="#">My Product Reviews</a>
                    </li>
                    <li>
                        <a href="#">Newsletter Subscriptions</a>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default DashboardMenu;