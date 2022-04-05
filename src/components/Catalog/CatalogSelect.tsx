import React from 'react';
import styles from './catalogSelect.module.scss';
import classNames from 'classnames';
import Select, { components, ControlProps } from 'react-select';

function CatalogSelect(props: any): any {
    let selectLabel: string = props.selectLabel;
    const Control = ({ children, ...props }: ControlProps<any[], false>) => (
        <components.Control {...props}>
            {selectLabel}: {children}
        </components.Control>
    );

    let itemClasses: any = {};

    if (props.showOnMobile === false) {
        if (selectLabel === "Show") {
            itemClasses = `${classNames(styles["catalog-select"], styles["hidden"], styles["hidden-mobile"])}`; 
        } else {
            itemClasses = `${classNames(styles["hidden"], styles["catalog-select"])}`;
        }
    } else {
        if (selectLabel === "Show") {
            itemClasses = `${classNames(styles["catalog-select"], styles["hidden-mobile"])}`; 
        } else {
            itemClasses = `${styles["catalog-select"]}`;
        }
    }

    return (
        <>
            <Select
                className={itemClasses}
                defaultValue={[props.options[0]]}
                options={props.options}
                components={{ Control }}
            />
        </>
    );
}

export default CatalogSelect;