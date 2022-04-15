import React from "react";
import styles from './subCategories.module.scss';
import { Category } from '../../CustomTypes';

type Props = {
    subCategories: Category[],
    activeSubCategory: number,
    handleSubcategoryChange: Function
}

function SubCategories(props: Props) {
    let categoriesItems = props.subCategories.map((category: any, id: number) => {        
        return (
            <li 
                key={category.id}
                className={(id === props.activeSubCategory) ? styles["active"]: ``}
            >
                <a 
                    href="#"
                    onClick={(event: any) => props.handleSubcategoryChange(event, id)}
                >
                    {category.name}
                </a>
            </li>
        )
    });

    return (
        <ul className={styles["products-list-menu"]}>
            {categoriesItems}
        </ul>
    )
}

export default SubCategories;