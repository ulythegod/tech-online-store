import React from 'react';
import styles from './footerSocials.module.scss';
import SocialsLinks from 'components/CommonComponents/SocialsLinks';

function FooterSocials(props: any): any {
    return (
        <div className={`${styles["footer-socials"]}`}>
            <SocialsLinks />
        </div>
    );
}

export default FooterSocials;
