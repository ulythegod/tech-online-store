import React from 'react';
import ReviewItem from './ReviewItem';

class MainReviews extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="main-reviews-section">
                <div className="reviews-list">
                    <div className="reviews-quotes-sign">"</div>
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
                    <button>Leave Us A Review</button>
                    <div className="reviews-scrolling">
                        <img src="./images/active-review.png" alt=""/>
                        <img src="./images/review.png" alt=""/>
                        <img src="./images/review.png" alt=""/>
                        <img src="./images/review.png" alt=""/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainReviews;
