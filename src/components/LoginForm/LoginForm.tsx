import React from 'react';
import styles from './loginForm.module.scss';
import LoginInfo from './LoginInfo';
import StoreButton from 'components/CommonComponents/StoreButton';

function LoginForm(props: any): any {
    return (
        <div className={`${styles["customer-login-block"]}`}>
            <div className={`${styles["customer-login-form-block"]}`}>
                <span className={`${styles["form-title"]}`}>Registered Customers</span>
                <span>If you have an account, sign in with your email address.</span>
                <form className={`${styles["customer-login-form"]}`} action="#">
                    <div className={`${styles["contact-us-form-item"]}`}>
                        <label>
                            <span>Email <span>*</span></span>
                            <input type="email" id="email" required value="Your Name"></input>
                        </label>
                    </div>
                    <div className={`${styles["contact-us-form-item"]}`}>
                        <label>
                            <span>Your Phone Number</span>
                            <input type="phone" id="phone" value="Your Phone Number"></input>
                        </label>
                    </div>
                    <div>
                        <StoreButton 
                            style="blue-button-narrow"
                            content={"Sign In"}
                        />
                        <a href="#">Forgot Your Password?</a>
                    </div>
                </form>
            </div>
            <LoginInfo />
        </div>
    );
}

export default LoginForm;