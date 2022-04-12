import React, { ReactElement } from 'react';
import styles from './faqItem.module.scss';

type Props = {
    id: number,
    name: string,
    description: ReactElement<any, any>
}

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