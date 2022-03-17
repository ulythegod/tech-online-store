import React from 'react';
import styles from './header.module.scss';
import HeaderTime from './HeaderTime';
import HeaderContacts from './HeaderContacts';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <div className={`${styles["header"]}`}>
                    <HeaderTime />
                    <p className={`${styles["header-contact"]}`}>
                        Visit our showroom in 1234 Street Adress City Address, 1234 <Link to="/contact-us">Contact Us</Link>
                    </p>
                    <HeaderContacts />
                </div>
            </header>
        );
    }
}

export default Header;
