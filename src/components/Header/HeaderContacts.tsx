import React from 'react';
import styles from './headerContacts.module.scss';
import { ReactComponent as FacebookIcon } from '../../images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../images/instagram.svg';

class HeaderContacts extends React.Component {
    render(): React.ReactNode {
        return (
            <p className={`${styles["header-rest"]}`}>
                <a href="tel:00-1234-5678">Call Us: (00) 1234 5678</a>
                <a href="#">
                    <FacebookIcon />
                </a>
                <a href="#">
                    <InstagramIcon />
                </a>
            </p>
        );
    }
}

export default HeaderContacts;
