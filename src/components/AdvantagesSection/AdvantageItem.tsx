import React from 'react';
import styles from './advantageItem.module.scss';

type Props = {
    image: string,
    name: string,
    description: string
}

function AdvantageItem(props: Props) {
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
