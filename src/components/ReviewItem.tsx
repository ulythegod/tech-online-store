import React from 'react';

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
            <div className="reviews-item">
                <p className="review-text">
                    {this.props.text}
                </p>
                <span>- {this.props.author}</span>
            </div>
        );
    }
}

export default ReviewItem;
