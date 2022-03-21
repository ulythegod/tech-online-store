import React from 'react';
import styles from './ratingButton.module.scss';
import { ReactComponent as RatingStar } from '../../images/star-gray.svg';

function RatingButton(props: any): any {
    return (
        <button className={`${styles["rating-button"]}`}>
            <RatingStar className={(props.isFilled) ? `${styles["filled"]}` : ''
        }/>
        </button>
    );
}

export default RatingButton;
