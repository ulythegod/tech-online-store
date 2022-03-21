import React from 'react';
import styles from './catalogSelect.module.scss';
import Select, { components, ControlProps } from 'react-select';

function CatalogSelect(props: any): any {
    let selectLabel: string = props.selectLabel;
    const Control = ({ children, ...props }: ControlProps<any[], false>) => (
        <components.Control {...props}>
            {selectLabel}: {children}
        </components.Control>
    );

    return (
        <>
            <Select
                className={`${styles["catalog-select"]}`}
                defaultValue={[props.options[0]]}
                options={props.options}
                components={{ Control }}
            />
        </>
    );
}

export default CatalogSelect;