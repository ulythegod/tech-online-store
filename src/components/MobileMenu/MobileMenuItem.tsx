import React, { useState } from "react";
import styles from './mobileMenuItem.module.scss';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectCategoryById } from '../../features/categories/categoriesSlice';

function MobileMenuItem(props: any) {
    const [openSubcategories, setOpenSubcategories] = useState(false);

    function handleOpenSubcategories(event: any) {
        event.preventDefault();

        setOpenSubcategories(!openSubcategories);
    }

    let category: any = useSelector((state: RootState) => selectCategoryById(state, props.id));     
    let subCategories: any[] = [];

    if (props.subCategories) {
        if (props.subCategories.length > 0) {
            subCategories = props.subCategories;
        }        
    } else {
        subCategories = category.subCategories;
    }

    let subCategoriesItems: any[] = [];

    if (subCategories) {
        if (subCategories.length > 0) {
            subCategoriesItems = subCategories.map((category: any, id: number) => {
                return (
                    <MobileMenuItem 
                        handleOpenSubcategories={handleOpenSubcategories}
                        id={category.id}
                        key={category.id}
                        name={category.name}
                    />
                )
            })
        }        
    }

    return (
        <li key={props.id} className={`${styles["menu-link-inner"]}`}>
            <div className={openSubcategories ? `${styles["main-item-opened"]}` : `${styles["main-item"]}`}>
                <a 
                    href="#"
                    onClick={(event: any) => handleOpenSubcategories(event)}
                    className={openSubcategories ? `` : `${styles["hidden"]}`}
                >
                    <div className={`${styles["link-arrow-left"]}`}></div>
                </a> 
                <Link to={`/catalog/${props.id}`} className={`${styles["item-link"]}`}>
                    {props.name}
                </Link>
                {
                (subCategories.length > 0) ?
                    <>
                        <a 
                            href="#"
                            onClick={(event: any) => handleOpenSubcategories(event)}
                            className={openSubcategories ? `${styles["hidden"]}` : ``}
                        >
                            <div className={`${styles["link-arrow"]}`}></div>
                        </a>
                    </> :
                    <></>
                }
            </div>
            
            {
                (subCategories.length > 0) ?
                <>                   
                    <ul className={openSubcategories ? `${styles["second-level"]}` : `${styles["hidden"]}`}>
                        {subCategoriesItems}
                    </ul>
                </> :
                <></>
            }
        </li>
    )
}

export default MobileMenuItem;