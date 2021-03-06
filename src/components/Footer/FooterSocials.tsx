import React from 'react';
import styles from './footerSocials.module.scss';
import SocialsLinks from '../../components/Buttons/SocialsLinks';

function FooterSocials() {
    return (
        <div className={styles["footer-socials"]}>
            <SocialsLinks />
        </div>
    );
}

export default FooterSocials;
