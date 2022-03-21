import React from 'react';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs(props: any): any {
    return (
        <nav className={`${styles["breadcrumbs-navigation"]}`}>
            <ul className={`${styles["breadcrumbs"]}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Laptops</a></li>
                <li className={`${styles["active"]}`}>MSI WS Series</li>
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
