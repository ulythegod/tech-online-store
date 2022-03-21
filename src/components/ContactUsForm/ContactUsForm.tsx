import React from 'react';
import styles from './contactUsForm.module.scss';
import ContactsBlock from 'components/ContactsBlock/ContactsBlock';
import StoreButton from 'components/CommonComponents/StoreButton';
import InputMask from "react-input-mask";

function ContactUsForm(props: any): any {
    const emailMask = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/";

    return (
        <div className={`${styles["contact-us-block"]}`}>
            <div className={`${styles["contact-us-form-block"]}`}>
                <p className={`${styles["form-description"]}`}>
                    We love hearing from you, our Shop customers.<br />
                    Please contact us and we will make sure to get back to you as soon as we possibly can.
                </p>
                <form action="#" className={`${styles["contact-us-form"]}`}>
                    <div className={`${styles["input-items"]}`}>
                        <div className={`${styles["form-item"]}`}>
                            <label>
                                <span>Your Name <span>*</span></span>
                                <input type="text" id="name" required placeholder="Your Name" />
                            </label>
                        </div>
                        <div className={`${styles["form-item"]}`}>
                            <label>
                                <span>Your Email <span>*</span></span>
                                <input type={"email"} placeholder="Your Email" pattern={emailMask} />
                            </label>                                
                        </div>
                        <div className={`${styles["form-item"]}`}>
                            <label>
                                Your Phone Number
                                <InputMask mask="+7 (999) 999-99-99" placeholder='Your Phone' />
                            </label>                                
                        </div>
                    </div>
                    <div className={`${styles["form-item"]}`}>
                        <label>
                            <span>What’s on your mind? <span>*</span></span>
                            <textarea 
                                required
                                placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                            ></textarea>
                        </label>
                    </div>
                    <StoreButton 
                        style="blue-button-narrow"
                        content={"Submit"}
                    />
                </form>
            </div>
            <ContactsBlock />
        </div>
    );
}

export default ContactUsForm;
