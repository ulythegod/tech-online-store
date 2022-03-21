import React from 'react';
import styles from './reviewItem.module.scss';

function ReviewItem(props: any): any {
    return (
        <div className={`${styles["reviews-item"]}`}>
            <div className={`${styles["reviews-quotes-sign"]}`}>‘’</div>
            <div className={`${styles["review-content"]}`}>
                <p className={`${styles["review-text"]}`}>
                    {props.text}
                </p>
                <span>- {props.author}</span>
            </div>
        </div>
    );
}

export default ReviewItem;
