import React from 'react';
import styles from './reviewsSection.module.scss';
import StoreButton from 'components/Buttons/StoreButton';
import ReviewItem from './ReviewItem';
import { ReactComponent as PaginationButton } from '../../images/pagiantion-button.svg';

function ReviewsSection() {
    return (
        <section className={`${styles["main-reviews-section"]}`}>
            <div className={`${styles["reviews-list"]}`}>
                <ReviewItem 
                    text={
                        `My first order arrived today in perfect condition.
                        From the time I sent a question about the item to making 
                        the purchase, to the shipping and now the delivery, your 
                        company, Tecs, has stayed in touch.  Such great service.  
                        I look forward to shopping on your site in the future and 
                        would highly recommend it.`
                    }
                    author={"Tama Brown"}
                />
                <div className={`${styles["reviews-bottom"]}`}>
                    <StoreButton 
                        style="light-button"
                        content={"Leave Us A Review"}
                    />
                    <div className={`${styles["reviews-scrolling"]}`} >
                        <PaginationButton className={`${styles["filled"]}`} />
                        <PaginationButton />
                        <PaginationButton />
                        <PaginationButton />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewsSection;
