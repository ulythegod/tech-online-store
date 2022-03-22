import React from 'react';
import styles from './card.module.scss';
import CardLists from './CardLists';
import CardSummaryForm from './CardSummaryForm';

function Card(props: any): any {
    return (
        <div className={`${styles["shopping-card-block"]}`}>
            <CardLists />
            <CardSummaryForm />
        </div>
    );    
}

export default Card;