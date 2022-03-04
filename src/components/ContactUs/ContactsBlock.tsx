import React from 'react';
import { ReactComponent as ContactsAdress } from '../../images/contacts-adress.svg';
import { ReactComponent as ContactsPhone } from '../../images/contacts-phone.svg';
import { ReactComponent as ContactsTime } from '../../images/contacts-time.svg';
import { ReactComponent as ContactsMail } from '../../images/contacts-mail.svg';

class ContactsBlock extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="contacts-block">
                <div className="contact-item">
                    <ContactsAdress />
                    <p>
                        <span>Address:</span>
                        <span>1234 Street Adress City Address, 1234</span>
                    </p>
                </div>
                <div className="contact-item">
                    <ContactsPhone />
                    <p>
                        <span>Phone:</span>
                        <span>(00)1234 5678</span>
                    </p>
                </div>
                <div className="contact-item">
                    <ContactsTime />
                    <p>
                        <span>We are open:</span>
                        <div>
                            Monday - Thursday: 9:00 AM - 5:30 PM
                            Friday 9:00 AM - 6:00 PM
                            Saturday: 11:00 AM - 5:00 PM
                        </div>
                    </p>
                </div>
                <div className="contact-item">
                    <ContactsMail />
                    <p>
                        <span>E-mail:</span>
                        <a href="mailto:shop@email.com">shop@email.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default ContactsBlock;