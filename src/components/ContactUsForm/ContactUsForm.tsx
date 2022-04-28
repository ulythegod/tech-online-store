import React from 'react';
import styles from './contactUsForm.module.scss';
import ContactsBlock from 'components/ContactsBlock/ContactsBlock';
import StoreButton from 'components/Buttons/StoreButton';
import FormItemText from '../FormItem/FormItemText';

function ContactUsForm() {
    const emailMask = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/";

    return (
        <div className={styles["contact-us-block"]}>
            <div className={styles["contact-us-form-block"]}>
                <p className={styles["form-description"]}>
                    We love hearing from you, our Shop customers.<br />
                    Please contact us and we will make sure to get back to you as soon as we possibly can.
                </p>
                <form action="#" className={styles["contact-us-form"]}>
                    <div className={styles["input-items"]}>
                        <FormItemText
                            label='Your Name'
                            required={true}
                            type="text"
                            id='name'
                            placeholder='Your Name'
                        />
                        <FormItemText
                            label='Your Email'
                            required={true}
                            type="email"
                            id='email'
                            placeholder='Your Email'
                            pattern={emailMask}
                        />
                        <FormItemText
                            label='Your Phone Number'
                            required={false}
                            type="phone"
                            id='phone'
                            placeholder='Your Phone'
                            mask='+7 (999) 999-99-99'
                        />
                    </div>
                    <div className={styles["form-item"]}>
                        <label>
                            <span>What’s on your mind? <span>*</span></span>
                            <textarea 
                                required
                                placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                            ></textarea>
                        </label>
                    </div>
                    <StoreButton 
                        buttonStyle="blue-button-narrow"
                        content={"Submit"}
                    />
                </form>
            </div>
            <ContactsBlock />
        </div>
    );
}

export default ContactUsForm;
