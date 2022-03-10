import React from 'react';
import styles from './breadcrumbs.module.scss';

class Breadcrumbs extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className={`${styles["breadcrumbs-navigation"]}`}>
                <ul className={`${styles["breadcrumbs"]}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/catalog">Laptops</a></li>
                    <li><a href="/catalog">Everyday Use Notebooks</a></li>
                    <li><a href="/catalog">MSI Prestige Series</a></li>
                    <li className={`${styles["active"]}`}>MSI WS Series</li>
                </ul>
            </nav>
        );
    }
}

export default Breadcrumbs;
