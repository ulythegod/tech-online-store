import React, { ReactElement } from 'react';
import styles from './faqItem.module.scss';

type Props = {
    id: string,
    name: string,
    description: any
}

function FAQItem(props: Props) {
    return (
        <div className={styles["faq-item"]} id={props.id}>
            <h3>{props.name}</h3>
            <div>
                {props.description}
            </div>
        </div>
    );
}

export default FAQItem;