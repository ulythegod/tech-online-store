import React from 'react';
import styles from './footer.module.scss';
import FooterSocials from './FooterSocials';
import FooterMenu from './FooterMenu';
import FooterSubscribeForm from './FooterSubscribeForm';
import FooterCards from './FooterCards';
import FooterChatButton from './FooterChatButton';

function Footer() {
    return (
        <footer className={styles["footer"]}>
            <FooterSubscribeForm />
            <FooterMenu />
            <div className={styles["footer-bottom-section"]}>
                <FooterSocials />
                <FooterCards />
                <span className={styles["footer-copyright"]}>Copyright © 2020 Shop Pty. Ltd.</span>
            </div>
            <FooterChatButton />
        </footer>
    );
}

export default Footer;
