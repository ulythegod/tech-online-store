import React from 'react';
import styles from './faqItem.module.scss';

function FAQItem(props: any): any {
    return (
        <div className={`${styles["faq-item"]}`} id={props.id}>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>
        </div>
    );
}

export default FAQItem;