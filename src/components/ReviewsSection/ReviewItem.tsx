import React from 'react';
import styles from './reviewItem.module.scss';

interface CustomInputProps {
    text: string;
    author: string;
}

class ReviewItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["reviews-item"]}`}>
                <div className={`${styles["reviews-quotes-sign"]}`}>‘’</div>
                <div className={`${styles["review-content"]}`}>
                    <p className={`${styles["review-text"]}`}>
                        {this.props.text}
                    </p>
                    <span>- {this.props.author}</span>
                </div>
            </div>
        );
    }
}

export default ReviewItem;
