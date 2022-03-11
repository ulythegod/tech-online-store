import React from 'react';
import styles from './filterItem.module.scss';

interface CustomComponentProps {
    name: string;
    isOpened: boolean;
    items?: any;
}

class FilterItem extends React.Component<CustomComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        let itemType = this.props.isOpened ? "item-opened" : "item-closed";
        return (
            <li className={`${styles["item"]}`}>
                <a className={`${styles["item-options"]}` + " " + `${styles[itemType]}`} href="#">{this.props.name}</a>
                {(this.props.isOpened && this.props.items) ? this.props.items : ""}
            </li>
        );
    }
}

export default FilterItem;