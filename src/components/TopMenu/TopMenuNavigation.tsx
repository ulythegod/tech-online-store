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
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Desktop PCs"
                    isHoverMenu={false}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Networking Devices"
                    isHoverMenu={true}
                    renderHoverMenu={<HoverMenu />}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Printers & Scanners"
                    isHoverMenu={false}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="PC Parts"
                    isHoverMenu={false}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="All Other Product"
                    isHoverMenu={false}
                />
                <TopMenuItem 
                    isHidden={props.isOpenSearchPannel ? true : false}
                    link="/catalog"
                    text="Repairs"
                    isHoverMenu={true}
                    renderHoverMenu={<HoverMenu />}
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
