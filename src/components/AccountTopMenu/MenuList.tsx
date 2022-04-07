import React from 'react';
import styles from './menuList.module.scss';

function MenuList(props: any): any {
    return (
        <ul className={`${styles["menu-list"]}`}>
            <li className={`${styles["list-item"]}`}><a href="#">My  Account</a></li>
            <li className={`${styles["list-item"]}`}><a href="#">My Wish List (0)</a></li>
            <li className={`${styles["list-item"]}`}><a href="#">Compare (0)</a></li>
            <li className={`${styles["list-item"]}`}><a href="#">Create an Account</a></li>
            <li className={`${styles["list-item"]}`}><a href="#">Sign In</a></li>
        </ul>
    )
}

export default MenuList;