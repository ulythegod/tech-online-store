import React from 'react';
import style from './topMenuNavigation.module.scss'
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import StoreButton from 'components/CommonComponents/StoreButton';
import HoverMenu from './HoverMenu';

function TopMenuNavagation(props: any): any {
    return (
        <>
            <ul className={`${style["main-top-menu"]}`}>
                <li>
                    <Link to="/"><Logo /></Link>
                </li>
                <li className={`${style["menu-link"]}`}>
                    <Link className={`${style["menu-link"]}`} to="/catalog">
                        Laptops
                        <ul className={`${style["hover-menu-block"]}`}>
                            <HoverMenu />
                        </ul>
                    </Link>
                </li>
                <li className={`${style["menu-link"]}`}>
                    <Link to="/catalog">Desktop PCs</Link>
                </li>
                <li className={`${style["menu-link"]}`}><Link to="/catalog">Networking Devices</Link></li>
                <li className={`${style["menu-link"]}`}><Link to="/catalog">Printers & Scanners</Link></li>
                <li className={`${style["menu-link"]}`}><Link to="/catalog">PC Parts</Link></li>
                <li className={`${style["menu-link"]}`}><Link to="/catalog">All Other Product</Link></li>
                <li className={`${style["menu-link"]}`}><Link to="/catalog">Repairs</Link></li>
                <li>
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
