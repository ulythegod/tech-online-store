import React from 'react';
import Breadcrumbs from 'components/CommonComponents/Breadcrumbs';
import PageTitle from 'components/CommonComponents/PageTitle';
import ContactsBlock from 'components/ContactUs/ContactsBlock';
import ContactUsForm from 'components/ContactUs/ContactUsForm';
import AdvantagesSection from 'components/AdvantagesSection/AdvantagesSection';

class ContactUs extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <>
                <section className="contact-us-section">
                    <Breadcrumbs />
                    <PageTitle
                        title='Contact Us'
                    />
                    <ContactUsForm />
                    <ContactsBlock />
                </section>
                <AdvantagesSection 
                  isBackground={true}
                />
            </>
        );
    }
}

export default ContactUs;