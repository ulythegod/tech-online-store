import React from 'react';
import styles from './ratingButton.module.scss';
import { ReactComponent as RatingStar } from '../../images/star-gray.svg';

type Props = {
    isFilled: boolean
}

function RatingButton(props: Props) {
    return (
        <button className={`${styles["rating-button"]}`}>
            <RatingStar className={(props.isFilled) ? `${styles["filled"]}` : ''
        }/>
        </button>
    );
}

export default RatingButton;
