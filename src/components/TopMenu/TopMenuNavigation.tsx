import React from 'react';
import style from './topMenuNavigation.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import StoreButton from 'components/Buttons/StoreButton';
import TopMenuItem from './TopMenuItem';
import HoverMenu from '../HoverMenu/HoverMenu';
import classNames from 'classnames';

function TopMenuNavagation(props: any): any {
    const menuItems: any[] = props.categories.map((category: any, id: number) => {
        return (
            <TopMenuItem 
                isHidden={props.isOpenSearchPannel ? true : false}
                link={`/catalog/${category.id}`}
                text={category.name}
                renderHoverMenu={<HoverMenu subCategories={category.subCategories} categoryId={category.id} />}
                id={id}
                key={category.id}
            />
        )
    });

    return (
        <>
            <ul className={!props.isOpenSearchPannel ? `${style["main-top-menu"]}` : `${classNames(style["main-top-menu"], style["main-top-menu-closed"])}`}>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                {menuItems}
                <li className={props.isOpenSearchPannel ? `${style["hidden"]}` : ''}>
                    <StoreButton
                        style="light-button"
                        content='Our Deals'
                    />
                </li>
            </ul>
        </>
    );
}

export default TopMenuNavagation;
