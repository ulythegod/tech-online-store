import React from 'react';
import styles from './ratingButton.module.scss';
import { ReactComponent as RatingStar } from '../../images/star-gray.svg';

class RatingButton extends React.Component {
    render(): React.ReactNode {
        return (
            <button className={`${styles["rating-button"]}`}>
                <RatingStar />
            </button>
        );
    }
}

export default RatingButton;
