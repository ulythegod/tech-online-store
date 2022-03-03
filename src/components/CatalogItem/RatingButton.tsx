import React from 'react';
import { ReactComponent as RatingStar } from '../../images/star-gray.svg';

class RatingButton extends React.Component {
    render(): React.ReactNode {
        return (
            <button>
                <RatingStar />
            </button>
        );
    }
}

export default RatingButton;
