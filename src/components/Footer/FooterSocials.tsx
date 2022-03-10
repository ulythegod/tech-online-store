import React from 'react';
import styles from './footerSocials.module.scss';
import SocialsLinks from 'components/CommonComponents/SocialsLinks';

class FooterSocials extends React.Component {
    render(): React.ReactNode {
        return (
            <div className={`${styles["footer-socials"]}`}>
                <SocialsLinks />
            </div>
        );
    }
}

export default FooterSocials;
