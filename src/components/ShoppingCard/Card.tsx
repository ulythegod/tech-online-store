import React from 'react';
import styles from './card.module.scss';
import CardLists from './CardLists';
import CardSummaryForm from './CardSummaryForm';

function Card(props: any): any {
    return (
        <div className={`${styles["shopping-card-block"]}`}>
            <CardLists />
            <div className={`${styles["card-summary"]}`}>
                <CardSummaryForm />
            </div>
        </div>
    );    
}

export default Card;