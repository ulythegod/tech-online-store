import React from 'react';
import styles from './filterItem.module.scss';

interface CustomComponentProps {
    name: string;
    isOpened: boolean;
    items?: any;
    isIcons?: boolean;
}

class FilterItem extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let itemType = this.props.isOpened ? "item-opened" : "item-closed";
        let itemIconsClass = this.props.isIcons ? "item-with-icons" : "";
        return (
            <>
                <a className={`${styles["item-options"]}` + " " + `${styles[itemType]}`} href="#">{this.props.name}</a>
                <li className={`${styles["item"]}` + " " + `${styles[itemIconsClass]}`}>
                    {(this.props.isOpened && this.props.items) ? this.props.items : ""}
                </li>
            </>
        );
    }
}

export default FilterItem;