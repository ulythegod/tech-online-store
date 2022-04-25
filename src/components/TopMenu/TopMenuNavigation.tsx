import React from 'react';
import style from './topMenuNavigation.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import StoreButton from 'components/Buttons/StoreButton';
import TopMenuItem from './TopMenuItem';
import HoverMenu from '../HoverMenu/HoverMenu';
import classNames from 'classnames';
import { Category } from '../../CustomTypes';

type Props = {
    categories: Category[],
    isOpenSearchPannel: boolean,
}

function TopMenuNavagation(props: Props) {
    const menuItems: any[] = props.categories.map((category: any, id: number) => {
        let label: string = (category.name === "Laptops") ? "laptops" : ""
        
        return (
            <TopMenuItem 
                isHidden={props.isOpenSearchPannel ? true : false}
                link={`/catalog/${category.id}`}
                text={category.name}
                renderHoverMenu={
                    <HoverMenu 
                        subCategories={category.subCategories} 
                        categoryId={category.id}
                        label={label ? label + "-hover" : ""}
                    />
                }
                id={id}
                key={category.id}
            />
        )
    });

    return (
        <>
            <ul 
                aria-label="main-top-menu" 
                className={!props.isOpenSearchPannel ? 
                    style["main-top-menu"] : 
                    classNames(style["main-top-menu"], style["main-top-menu-closed"])}
                role="menu"
            >
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                {menuItems}
                <li className={props.isOpenSearchPannel ? style["hidden"] : ''}>
                    <StoreButton
                        buttonStyle="light-button"
                        content='Our Deals'
                    />
                </li>
            </ul>
        </>
    );
}

export default TopMenuNavagation;
