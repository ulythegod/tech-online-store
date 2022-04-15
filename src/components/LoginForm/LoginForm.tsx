import React from 'react';
import styles from './loginForm.module.scss';
import LoginInfo from './LoginInfo';
import StoreButton from 'components/Buttons/StoreButton';
import InputMask from "react-input-mask";

function LoginForm() {
    const emailMask = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/";

    return (
        <div className={styles["customer-login-block"]}>
            <div className={styles["customer-login-form-block"]}>
                <div className={styles["block-inner"]}>
                    <span className={styles["form-title"]}>Registered Customers</span>
                    <span className={styles["form-description"]}>If you have an account, sign in with your email address.</span>
                    <form className={styles["customer-login-form"]} action="#">
                        <div className={styles["contact-us-form-item"]}>
                            <label>
                                <span>Email <span>*</span></span>
                                <input type="email" placeholder="Your Email" pattern={emailMask} />
                            </label>
                        </div>
                        <div className={styles["contact-us-form-item"]}>
                            <label>
                                <span>Your Phone Number</span>
                                <InputMask mask="+7 (999) 999-99-99" placeholder='Your Phone Number' />
                            </label>
                        </div>
                        <div className={styles["form-buttons"]}>
                            <StoreButton 
                                style="blue-button-narrow"
                                content={"Sign In"}
                            />
                            <a className={styles["forget-password-link"]} href="#">Forgot Your Password?</a>
                        </div>
                    </form>
                </div>
            </div>
            <LoginInfo />
        </div>
    );
}

export default LoginForm;