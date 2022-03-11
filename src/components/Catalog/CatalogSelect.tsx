import React from 'react';
import styles from './catalogSelect.module.scss';
import Select, { components, ControlProps } from 'react-select';

interface ComponentProps {
    options: any[],
    selectLabel: string
}

class CatalogSelect extends React.Component<ComponentProps> {
    constructor(props: any) {
        super(props);
    }

    render(): React.ReactNode {
        const Control = ({ children, ...props }: ControlProps<any[], false>) => (
            <components.Control {...props}>
                {this.props.selectLabel}: {children}
            </components.Control>
        );

        return (
            <>
                <Select
                    className={`${styles["catalog-select"]}`}
                    defaultValue={[this.props.options[0]]}
                    options={this.props.options}
                    components={{ Control }}
                />
            </>
        );
    }
}

export default CatalogSelect;