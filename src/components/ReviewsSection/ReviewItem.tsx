import React from 'react';
import styles from './reviewItem.module.scss';

type Props = {
    text: string,
    author: string
}

function ReviewItem(props: Props) {
    return (
        <div className={styles["reviews-item"]}>
            <div className={styles["reviews-quotes-sign"]}>‘’</div>
            <div className={styles["review-content"]}>
                <p className={styles["review-text"]}>
                    {props.text}
                </p>
                <span>- {props.author}</span>
            </div>
        </div>
    );
}

export default ReviewItem;
