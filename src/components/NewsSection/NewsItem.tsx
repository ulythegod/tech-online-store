import React from 'react';
import styles from './newsItem.module.scss';

interface CustomInputProps {
    image: any;
    name: string;
    date: string;
}

class NewsItem extends React.Component<CustomInputProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className={`${styles["news-item"]}`}>
                <img src={this.props.image} alt="news1" />
                <p>
                    {this.props.name}
                </p>
                <span>{this.props.date}</span>
            </div>
        );
    }
}

export default NewsItem;
