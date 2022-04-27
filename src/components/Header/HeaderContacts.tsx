import React from 'react';
import styles from './headerContacts.module.scss';
import SocialsLinks from '../../components/Buttons/SocialsLinks';

function HeaderContacts() {
    return (
        <p className={styles["header-rest"]}>
            <a href="tel:00-1234-5678">Call Us: (00) 1234 5678</a>
            <SocialsLinks />
        </p>
    );
}

export default HeaderContacts;
