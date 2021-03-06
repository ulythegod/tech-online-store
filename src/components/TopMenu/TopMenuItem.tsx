import React, { useState } from "react";
import stylesModule from './topMenuItem.module.scss';
import { Link } from 'react-router-dom';
import { usePopper } from 'react-popper';
import { Placement } from "@popperjs/core";
import { TopMenuItemProps } from 'CustomPropsTypes';

function TopMenuItem(props: TopMenuItemProps) {
    const [showHoverMenu, setShowHoverMenu] = useState(false);
    const [isItemHovered, setIsItemHovered] = useState(false);
    
    function handleOpenHoveredMenu() {       
        if (!isItemHovered) {
            setIsItemHovered(prevIsItemHovered => !prevIsItemHovered);
        }

        if (props.renderHoverMenu && !showHoverMenu) {
            setShowHoverMenu(prevShowHoverMenu => !prevShowHoverMenu);
        }
    }

    function handleCloseHoveredMenu() {
        if (isItemHovered) {
            setIsItemHovered(prevIsItemHovered => !prevIsItemHovered);
        }

        if (props.renderHoverMenu && showHoverMenu) {
            setShowHoverMenu(prevShowHoverMenu => !prevShowHoverMenu);
        }
    }

    const [referenceElement, setReferenceElement] = useState<HTMLLIElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(null);
    
    let placementValue: Placement = "bottom";
    if (props.id < 2) {
        placementValue = "bottom-start";
    } else if (props.id > 2) {
        placementValue = "bottom-end";
    }

    const { styles, attributes } = usePopper(
        referenceElement,
        popperElement,
        {
            placement: placementValue,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                      offset: (props.id <= 2) ? [-150, 0] :
                            (props.id > 2) ? [650, 0] : [0, 0],
                    },
                },
            ],
        }
    );    

    return (
        <li 
            className={!props.isHidden ? stylesModule["menu-link"] : stylesModule["hidden"]}
            onMouseEnter={() => handleOpenHoveredMenu()}
            onMouseLeave={() => handleCloseHoveredMenu()}
            onFocus={() => handleOpenHoveredMenu()}
            onBlur={() => handleCloseHoveredMenu()}
            ref={setReferenceElement}
            role="menuitem"
            aria-label={props.text}
        >
            <Link  
                className={isItemHovered ? stylesModule["menu-link-inner-hover"] : stylesModule["menu-link-inner"]} 
                to={props.link}
            >
                {props.text}
            </Link>            
            <ul 
                className={(props.renderHoverMenu && showHoverMenu) ? stylesModule["hover-menu-block"] : stylesModule["hidden"]}
                ref={setPopperElement}
                style={styles.popper} {...attributes.popper}
            >
                {props.renderHoverMenu}
            </ul>            
        </li>
    )
}

export default TopMenuItem;