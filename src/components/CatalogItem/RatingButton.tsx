import React from 'react';
import styles from './ratingButton.module.scss';
import { ReactComponent as RatingStar } from '../../images/star-gray.svg';

interface ComponentProps {
    isFilled: boolean;
}

class RatingButton extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <button className={`${styles["rating-button"]}`}>
                <RatingStar className={(this.props.isFilled) ? `${styles["filled"]}` : ''
            }/>
            </button>
        );
    }
}

export default RatingButton;
