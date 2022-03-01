import React from 'react';
import styles from './index.module.scss';
import HeaderTime from './HeaderTime';
import HeaderContacts from './HeaderContacts';

class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <div className={`${styles["header"]}`}>
                    <HeaderTime />
                    <p className="header-contact">
                        Visit our showroom in 1234 Street Adress City Address, 1234 <a href="#">Contact Us</a>
                    </p>
                    <HeaderContacts />
                </div>
            </header>
        );
    }
}

export default Header;
