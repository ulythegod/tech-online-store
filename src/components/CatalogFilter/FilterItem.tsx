import React from 'react';
import styles from './filterItem.module.scss';

function FilterItem(props: any): any {
    let itemType = props.isOpened ? "item-opened" : "item-closed";
    let itemIconsClass = props.isIcons ? "item-with-icons" : "";

    return (
        <>
            <a className={`${styles["item-options"]}` + " " + `${styles[itemType]}`} href="#">{props.name}</a>
            <li className={`${styles["item"]}` + " " + `${styles[itemIconsClass]}`}>
                {(props.isOpened && props.items) ? props.items : ""}
            </li>
        </>
    );
}

export default FilterItem;