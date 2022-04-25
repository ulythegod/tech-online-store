import React from 'react';
import styles from './footerSubscribeForm.module.scss';
import StoreButton from 'components/Buttons/StoreButton';

function FooterSubscribeForm() {
    return (
        <div className={styles["subscribe-form-footer"]}>
            <div className={styles["form-description"]}>
                <span className={styles["form-title"]}>Sign Up To Our Newsletter.</span>
                <span className={styles["form-undertitle"]}>Be the first to hear about the latest offers.</span>
            </div>
            <form className={styles["subscribe-form"]} action="#">
                <input type="email" placeholder='Your Email' />
                <StoreButton 
                    buttonStyle="blue-button"
                    content={"Subscribe"}
                />
            </form>
        </div>
    );
}

export default FooterSubscribeForm;
