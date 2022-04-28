import React from "react";
import styles from './multilevelMenu.module.scss';
import MultilevelMenuItem from "./MultilevelMenuItem";
import { MultilevelMenuProps } from 'CustomPropsTypes';

function MultilevelMenu(props: MultilevelMenuProps) {
    const menuItems: any[] = props.subCategories.map((category: any, id: number) => {      
        return (
            <MultilevelMenuItem 
                key={category.id}
                id={category.id}
                name={category.name}
                level={1}
            />
        )
    })

    return (
        <ul className={styles["menu-main-list"]}>
            {menuItems}
        </ul>
    )
}

export default MultilevelMenu;