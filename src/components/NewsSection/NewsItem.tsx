import React from 'react';
import styles from './newsItem.module.scss';

function NewsItem(props: any): any {
    return (
        <div className={`${styles["news-item"]}`}>
            <img src={props.image} alt="news1" />
            <p>
                {props.name}
            </p>
            <span>{props.date}</span>
        </div>
    );
}

export default NewsItem;
