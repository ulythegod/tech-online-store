import React from "react";
import styles from './multilevelMenuItem.module.scss';
import classNames from "classnames";
import {Link} from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectCategoryById } from '../../features/categories/categoriesSlice';

function MultilevelMenuItem(props: any) {
    let categoryWithSubcategories: any = useSelector((state: RootState) => selectCategoryById(state, props.id));
    let notEmptySubcategories: boolean = false;

    if (categoryWithSubcategories.subCategories) { 
        if (categoryWithSubcategories.subCategories.length > 0) {
            notEmptySubcategories = true;
        }
    }

    let liClassName: string = "";
    let ulClassName: string = "";
    let nextLevel: number = 0;

    if (props.level === 1) {
        liClassName = `${classNames(styles["main-list-item"], styles["item-with-level"])}`;
        ulClassName = "second-level-list";
        nextLevel = 2;
    } else if (props.level === 2) {
        liClassName = `${classNames(styles["main-list-item"], styles["item-with-third-level"])}`;
        ulClassName = "third-level-list";
        nextLevel = 3;
    } else {
        liClassName = `${styles["main-list-item"]}`;
    }

    let menuItems: any[] = [];
    if (notEmptySubcategories) {
        menuItems = categoryWithSubcategories.subCategories.map((category: any, id: number) => {
            return (
                <MultilevelMenuItem
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    level={nextLevel}
                />
            )
        })
    }   

    return (
        <li 
            className={liClassName}
        >
            <Link className={`${styles["menu-link-inner"]}`} to={`/catalog/${props.id}`}>
                {   
                    (props.level === 3) ?
                    <>{props.name} <span className={`${styles["amount"]}`}>(12)</span></> :
                    props.name
                }
            </Link>
            {
                (notEmptySubcategories) ? 
                <>
                    <span className={`${styles["arrow-next-level"]}`}></span>
                    <ul className={`${styles[ulClassName]}`}>
                        {menuItems}
                    </ul>
                </> :
                <></>
            }
        </li>
    )
}

export default MultilevelMenuItem;