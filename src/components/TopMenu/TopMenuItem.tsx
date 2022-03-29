import React, { useState } from "react";
import styles from './topMenuItem.module.scss';
import { Link } from 'react-router-dom';

function TopMenuItem(props: any): any {
    const [showHoverMenu, setShowHoverMenu] = useState(false);
    const [isItemHovered, setIsItemHovered] = useState(false);
    
    function handleOnMouseEnter() {       
        if (!isItemHovered) {
            setIsItemHovered(prevIsItemHovered => !prevIsItemHovered);
        }

        if (props.renderHoverMenu && !showHoverMenu) {
            setShowHoverMenu(prevShowHoverMenu => !prevShowHoverMenu);
        }
    }

    function handleOnMouseLeaveOnItem() {
        if (!props.renderHoverMenu && !showHoverMenu && isItemHovered) {
            setIsItemHovered(prevIsItemHovered => !prevIsItemHovered);
        }
    }

    function handleOnMouseLeaveOnMenu() {
        if (props.renderHoverMenu && showHoverMenu && isItemHovered) {
            setShowHoverMenu(prevShowHoverMenu => !prevShowHoverMenu);
            setIsItemHovered(prevIsItemHovered => !prevIsItemHovered);
        }
    }

    return (
        <li 
            className={!props.isHidden ? `${styles["menu-link"]}` : `${styles["hidden"]}`}
            onMouseEnter={() => handleOnMouseEnter()}
            onMouseLeave={() => handleOnMouseLeaveOnItem()}
        >
            <Link className={isItemHovered ? `${styles["menu-link-inner-hover"]}` : `${styles["menu-link-inner"]}`} to={props.link}>
                {props.text}
            </Link>            
            <ul 
                onMouseLeave={() => handleOnMouseLeaveOnMenu()} 
                className={(props.renderHoverMenu && showHoverMenu) ? `${styles["hover-menu-block"]}` : `${styles["hidden"]}`}
            >
                {props.renderHoverMenu}
            </ul>            
        </li>
    )
}

export default TopMenuItem;