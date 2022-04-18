import React from 'react';
import styles from './storeButton.module.scss';
import classNames from 'classnames';

interface StoreButtonProps {
    backgroundColor?: string;
    label: string;
    content: any;
    state?: 'narrow' | 'general' | 'header' | 'icon';
    showOnMobile?: boolean; 
    onClick?: () => void;
}

export const StoreButton = ({
    backgroundColor,
    label,
    state,
    content,
    showOnMobile,
    ...props
}: StoreButtonProps) => {
    let mode: string = "";

    switch (backgroundColor) {
        case 'light':
            mode = "light";
            break;
        case 'blue':
            mode = "blue";
            break;
        case 'yellow':
            mode = "yellow";
            break;
        case 'grey':
            mode = "grey";
            break;
        case 'black':
            mode = "black";
            break;
    }

    if (mode.length > 0) {
        mode += "-button";
    }

    switch (state) {
        case 'general':
            mode += '-general';
            break;
        case 'header':
            mode += '-header';
            break;
        case 'narrow':
            mode += '-narrow';
            break;
        case 'icon':
            mode = "icon-button";
            break;
    }

    return (
        <button 
            className={
                (showOnMobile === false) ? classNames(styles[mode], styles["hidden"]) : styles[mode]
            }
            aria-label={label}
            {...props}
        >
                {content}
        </button>
    )
}