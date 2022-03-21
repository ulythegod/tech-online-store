import React from 'react';
import styles from './selectedFilter.module.scss';
import { ReactComponent as DeleteFilter } from '../../images/delete-filter.svg';

function SelectedFilter(props: any): any {
    return (
        <button className={`${styles["selected-filter"]}`}>
            <span>{props.name} <span className={`${styles["selected-number"]}`}>({props.amount})</span></span>
            <a href={props.link}><DeleteFilter /></a>
        </button>
    );
}

export default SelectedFilter;
