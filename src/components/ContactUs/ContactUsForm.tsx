import React from 'react';

class ContactUsForm extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="contact-us-form-block">
                <p>
                    We love hearing from you, our Shop customers.<br />
                    Please contact us and we will make sure to get back to you as soon as we possibly can.
                </p>
                <form action="#" className="contact-us-form">
                    <div className="contact-us-form-item">
                        <label>
                            Your Name <span>*</span>
                            <input type="text" id="name" required value="Your Name"></input>
                        </label>
                    </div>
                    <div className="contact-us-form-item">
                        <label>
                            Your Email <span>*</span>
                            <input type="email" id="email" required value="Your Email"></input>
                        </label>                                
                    </div>
                    <div className="contact-us-form-item">
                        <label>
                            Your Phone Number
                            <input type="phone" id="phone" value="Your Phone Number"></input>
                        </label>                                
                    </div>
                    <div className="contact-us-form-item">
                        <label>
                            What’s on your mind? <span>*</span>
                            <textarea required>Jot us a note and we’ll get back to you as quickly as possible</textarea>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactUsForm;
