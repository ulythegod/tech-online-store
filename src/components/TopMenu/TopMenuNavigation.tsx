import React from 'react';
import style from './topMenuNavigation.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import StoreButton from 'components/Buttons/StoreButton';
import TopMenuItem from './TopMenuItem';
import HoverMenu from '../HoverMenu/HoverMenu';
import classNames from 'classnames';

function TopMenuNavagation(props: any): any {
    return (
        <>
            <ul className={!props.isOpenSearchPannel ? `${style["main-top-menu"]}` : `${classNames(style["main-top-menu"], style["main-top-menu-closed"])}`}>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Laptops"
                    renderHoverMenu={<HoverMenu />}
                    id={0}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Desktop PCs"
                    renderHoverMenu={<HoverMenu />}
                    id={1}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Networking Devices"
                    renderHoverMenu={<HoverMenu />}
                    id={2}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Printers & Scanners"
                    renderHoverMenu={<HoverMenu />}
                    id={3}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="PC Parts"
                    renderHoverMenu={<HoverMenu />}
                    id={4}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="All Other Product"
                    renderHoverMenu={<HoverMenu />}
                    id={5}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Repairs"
                    renderHoverMenu={<HoverMenu />}
                    id={6}
                />
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
