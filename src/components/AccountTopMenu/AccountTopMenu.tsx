import React, { useState } from 'react';
import stylesModule from './accountTopMenu.module.scss';
import { usePopper } from 'react-popper';
import MenuList from './MenuList';
import avatar from '../../images/avatar.png';

function AccountTopMenu() {
    const [isDisplayMenu, setIsDisplayMenu] = useState(false);
    const displayMenu = () => {
        setIsDisplayMenu(prevIsDisplayMenu => !prevIsDisplayMenu);
    }

    const [buttonRef, setReferenceElement] = useState<HTMLButtonElement | null>(null);
    const [popperRef, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

    const { styles, attributes } = usePopper(
        buttonRef,
        popperRef,
        {
            placement: 'bottom-start',
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        element: arrowRef,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, -2],
                    },
                },
            ],
        }
    );  

    return (
        <>
            <button className={`${stylesModule["account-block"]}`} ref={setReferenceElement} onClick={displayMenu}>
                <img src={avatar} alt="avatar"/>
            </button>
            {isDisplayMenu &&
                <div id="popper" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    <div ref={setArrowRef} className={`${stylesModule["arrow"]}`}></div>
                    <MenuList />
                </div>
            }
        </> 
    )
}

export default AccountTopMenu;