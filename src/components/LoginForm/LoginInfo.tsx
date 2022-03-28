import React from 'react';
import styles from './loginInfo.module.scss';
import StoreButton from 'components/Buttons/StoreButton';

function LoginInfo(props: any): any {
    return (
        <div className={`${styles["customer-login-info"]}`}>
            <div className={`${styles["block-inner"]}`}>
                <span className={`${styles["info-title"]}`}>New Customer?</span>
                <span className={`${styles["info-description"]}`}>Creating an account has many benefits:</span>
                <p className={`${styles["info-list"]}`}>
                    <ul>
                        <li>Check out faster</li>
                        <li>Keep more than one address</li>
                        <li>Track orders and more</li>
                    </ul>
                </p>
                <div className={`${styles["info-buttons"]}`}>
                    <StoreButton 
                        style="blue-button-narrow"
                        content="Create An Account"
                    />  
                </div>
            </div>           
        </div>
    );
}

export default LoginInfo;