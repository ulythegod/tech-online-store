import React from 'react';
import styles from './advantageItem.module.scss';

function AdvantageItem(props: any): any {
    return (
        <div className={`${styles["advantages-item"]}`}>
            <img src={props.image} alt={props.name}/>
            <span>{props.name}</span>
            <p>
                {props.description}
            </p>
        </div>
    );
}
export default AdvantageItem;
