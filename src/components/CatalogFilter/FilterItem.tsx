import React, { useState } from 'react';
import styles from './filterItem.module.scss';
import classNames from 'classnames';

function FilterItem(props: any): any {
    const [isOpened, setIsOpened] = useState(false);

    let itemType = isOpened ? "item-opened" : "item-closed";
    let itemIconsClass = props.isIcons ? "item-with-icons" : "";

    function handleIsOpenedChange(e: any) {
        e.preventDefault();
        setIsOpened(prevIsOpened => !prevIsOpened);
    }

    return (
        <>
            <a onClick={(e) => handleIsOpenedChange(e)} className={`${classNames(styles["item-options"], styles[itemType])}`} href="#">{props.name}</a>
            <li className={`${classNames(styles["item"], styles[itemIconsClass])}`}>
                {(isOpened && props.items) ? props.items : ""}
            </li>
        </>
    );
}

export default FilterItem;